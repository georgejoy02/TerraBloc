// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Land {
    address contractOwner;

    constructor() {
        contractOwner = msg.sender;
    }

    struct Landreg {
        uint256 id;
        uint256 area;
        string landAddress;
        uint256 landPrice;
        string allLatitudeLongitude;
        uint256 propertyPID;
        string physicalSurveyNumber;
        string document;
        bool isforSell;
        address payable ownerAddress;
        bool landVerified;
    }

    struct User {
        address id;
        string name;
        uint256 age;
        string city;
        string aadharNumber;
        string panNumber;
        string document;
        string email;
        bool userVerified;
    }

    struct LandInspector {
        uint256 id;
        address _addr;
        string name;
        uint256 age;
        string designation;
        string city;
    }

    struct LandRequest {
        uint256 reqId;
        address payable sellerId;
        address payable buyerId;
        uint256 landId;
        reqStatus requestStatus;
        bool isPaymentDone;
    }
    enum reqStatus {
        requested,
        accepted,
        rejected,
        paymentdone,
        commpleted
    }

    uint256 inspectorsCount;
    uint256 public userCount;
    uint256 public landsCount;
    uint256 public documentId;
    uint256 requestCount;

    mapping(address => LandInspector) public InspMap;
    mapping(uint256 => address[]) allLiListMap;
    mapping(address => bool) isRegInspMap;
    mapping(address => User) public UserMap;
    mapping(uint256 => address) AllUsersMap;
    mapping(uint256 => address[]) allUsersListMap;
    mapping(address => bool) isRegUserMap;
    mapping(address => uint256[]) UserLandsMap;
    mapping(uint256 => Landreg) public landsMap;
    mapping(uint256 => LandRequest) public LandRequestMap;
    mapping(address => uint256[]) ReceivedLandRequestMap;
    mapping(address => uint256[]) SentLandRequestMap;
    mapping(uint256 => uint256[]) allLandListMap;
    mapping(uint256 => uint256[]) paymentDoneListMap;

    //-----------------------------------------------Modifiers-----------------------------------------------
    modifier OwnerCheck() {
        require(
            msg.sender == contractOwner,
            "This function is restricted to the contract's owner"
        );
        _;
    }
    modifier LiVerifyCheck() {
        require(
            isLandInspector(msg.sender),
            "This function is restricted to Land Inspectors"
        );
        _;
    }
    modifier userVerifyCheck() {
        require(
            isUserVerified(msg.sender),
            "This function is restricted to verified users"
        );
        _;
    }
    modifier sellerIdCheck(uint256 _requestId) {
        require(
            LandRequestMap[_requestId].sellerId == msg.sender,
            "requests can only be managed byrespective sellers"
        );
        _;
    }

    //-----------------------------------------------ContractOwner-----------------------------------------------

    function isContractOwner(address _addr) public view returns (bool) {
        if (_addr == contractOwner) return true;
        else return false;
    }

    function changeContractOwner(address _addr) external OwnerCheck {
        contractOwner = _addr;
    }

    //-----------------------------------------------LandInspector-----------------------------------------------
    event LiAdd(
        address indexed sender,
        address recipient,
        string name,
        uint256 age,
        string designation,
        string city
    );

    function addLandInspector(
        address _addr,
        string memory _inspName,
        uint256 _inspAge,
        string memory _designation,
        string memory _city
    ) external OwnerCheck {
        require(isRegInspMap[_addr] == false, "Land insp already in the list");
        isRegInspMap[_addr] = true;
        allLiListMap[1].push(_addr);
        inspectorsCount++;
        InspMap[_addr] = LandInspector(
            inspectorsCount,
            _addr,
            _inspName,
            _inspAge,
            _designation,
            _city
        );
        emit LiAdd(msg.sender, _addr, _inspName, _inspAge, _designation, _city);
    }

    function ReturnAllLandIncpectorList()
        public
        view
        returns (address[] memory)
    {
        return allLiListMap[1];
    }

    function removeLandInspector(address _addr) external OwnerCheck {
        require(isRegInspMap[_addr], "Land Inspector not found for removal");
        isRegInspMap[_addr] = false;

        uint256 len = allLiListMap[1].length;
        for (uint256 i = 0; i < len; i++) {
            if (allLiListMap[1][i] == _addr) {
                allLiListMap[1][i] = allLiListMap[1][len - 1];
                allLiListMap[1].pop();
                inspectorsCount--;
                break;
            }
        }
    }

    function isLandInspector(address _id) public view returns (bool) {
        if (isRegInspMap[_id]) {
            return true;
        } else {
            return false;
        }
    }

    //-----------------------------------------------User-----------------------------------------------

    function isUserRegistered(address _addr) public view returns (bool) {
        if (isRegUserMap[_addr]) {
            return true;
        } else {
            return false;
        }
    }

    function registerUser(
        string memory _userName,
        uint256 _userAge,
        string memory _city,
        string memory _aadharNumber,
        string memory _panNumber,
        string memory _document,
        string memory _email
    ) external {
        require(!isRegUserMap[msg.sender], "Already a registered user");

        isRegUserMap[msg.sender] = true;
        userCount++;
        allUsersListMap[1].push(msg.sender);
        AllUsersMap[userCount] = msg.sender;
        UserMap[msg.sender] = User(
            msg.sender,
            _userName,
            _userAge,
            _city,
            _aadharNumber,
            _panNumber,
            _document,
            _email,
            false
        );
    }

    function verifyUser(address _userId) external LiVerifyCheck {
        UserMap[_userId].userVerified = true;
    }

    function isUserVerified(address id) public view returns (bool) {
        return UserMap[id].userVerified;
    }

    function ReturnAllUserList() public view returns (address[] memory) {
        return allUsersListMap[1];
    }

    //-----------------------------------------------Land-----------------------------------------------
    function addLand(
        uint256 _area,
        string memory _address,
        uint256 _landPrice,
        string memory _allLatiLongi,
        uint256 _propertyPID,
        string memory _surveyNum,
        string memory _document
    ) external userVerifyCheck {
        landsCount++;
        landsMap[landsCount] = Landreg(
            landsCount,
            _area,
            _address,
            _landPrice,
            _allLatiLongi,
            _propertyPID,
            _surveyNum,
            _document,
            false,
            payable(msg.sender),
            false
        );
        UserLandsMap[msg.sender].push(landsCount);
        allLandListMap[1].push(landsCount);
    }

    function ReturnAllLandList() public view returns (uint256[] memory) {
        return allLandListMap[1];
    }

    function verifyLand(uint256 _id) external LiVerifyCheck {
        landsMap[_id].landVerified = true;
    }

    function isLandVerified(uint256 id) public view returns (bool) {
        return landsMap[id].landVerified;
    }

    function myAllLands(address id) public view returns (uint256[] memory) {
        return UserLandsMap[id];
    }

    function makeItforSell(uint256 id) external {
        require(
            landsMap[id].ownerAddress == msg.sender,
            "makeItforSell function restricted to only respective land owners"
        );
        landsMap[id].isforSell = true;
    }

    function requestforBuy(uint256 _landId) external userVerifyCheck {
        require(
            isLandVerified(_landId),
            "requestforBuy function restricted to verified lands"
        );
        requestCount++;
        LandRequestMap[requestCount] = LandRequest(
            requestCount,
            landsMap[_landId].ownerAddress,
            payable(msg.sender),
            _landId,
            reqStatus.requested,
            false
        );
        ReceivedLandRequestMap[landsMap[_landId].ownerAddress].push(
            requestCount
        );
        SentLandRequestMap[msg.sender].push(requestCount);
    }

    function myReceivedLandRequests() public view returns (uint256[] memory) {
        return ReceivedLandRequestMap[msg.sender];
    }

    function mySentLandRequests() public view returns (uint256[] memory) {
        return SentLandRequestMap[msg.sender];
    }

    function acceptRequest(
        uint256 _requestId
    ) external sellerIdCheck(_requestId) {
        LandRequestMap[_requestId].requestStatus = reqStatus.accepted;
    }

    function rejectRequest(
        uint256 _requestId
    ) external sellerIdCheck(_requestId) {
        LandRequestMap[_requestId].requestStatus = reqStatus.rejected;
    }

    function requesteStatus(uint256 id) public view returns (bool) {
        return LandRequestMap[id].isPaymentDone;
    }

    function landPrice(uint256 id) public view returns (uint256) {
        return landsMap[id].landPrice;
    }

    function makePayment(uint256 _requestId) external payable {
        require(
            LandRequestMap[_requestId].buyerId == msg.sender,
            "makePayment function restricted to respective buyers"
        );
        require(
            LandRequestMap[_requestId].requestStatus == reqStatus.accepted,
            "makePayment function restricted to only seller-accepted requests"
        );
        assert(
            landsMap[LandRequestMap[_requestId].landId].ownerAddress.balance >=
                msg.value
        );
        landsMap[LandRequestMap[_requestId].landId].ownerAddress.transfer(
            msg.value
        );
        LandRequestMap[_requestId].requestStatus = reqStatus.paymentdone;
        LandRequestMap[_requestId].isPaymentDone = true;
        paymentDoneListMap[1].push(_requestId);
    }

    function returnPaymentDoneList() public view returns (uint256[] memory) {
        return paymentDoneListMap[1];
    }

    function transferOwnership(
        uint256 _requestId,
        string memory documentUrl
    ) external LiVerifyCheck {
        require(
            LandRequestMap[_requestId].isPaymentDone == true,
            "Payment should be done before invoking transferOwnership function"
        );
        documentId++;
        LandRequestMap[_requestId].requestStatus = reqStatus.commpleted;
        UserLandsMap[LandRequestMap[_requestId].buyerId].push(
            LandRequestMap[_requestId].landId
        );

        uint256 len = UserLandsMap[LandRequestMap[_requestId].sellerId].length;
        for (uint256 i = 0; i < len; i++) {
            if (
                UserLandsMap[LandRequestMap[_requestId].sellerId][i] ==
                LandRequestMap[_requestId].landId
            ) {
                UserLandsMap[LandRequestMap[_requestId].sellerId][
                    i
                ] = UserLandsMap[LandRequestMap[_requestId].sellerId][len - 1];
                UserLandsMap[LandRequestMap[_requestId].sellerId].pop();
                break;
            }
        }
        landsMap[LandRequestMap[_requestId].landId].document = documentUrl;
        landsMap[LandRequestMap[_requestId].landId].isforSell = false;
        landsMap[LandRequestMap[_requestId].landId]
            .ownerAddress = LandRequestMap[_requestId].buyerId;
    }
}
