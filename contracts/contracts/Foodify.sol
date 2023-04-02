// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

contract foodify{
    address public owner;
    uint256 private counter;
    uint256 private priority;

    constructor(){
        counter = 0;
        owner = msg.sender;
    }

    struct post{
        address creator;
        uint256 id;
        string postTxt;
        string postImg;
    }

    event postCreated(
        address creator,
        uint256 id,
        string postTxt,
        string postImg
    );

    mapping(uint256 => post) Posts;

    function uploadPost(
        string memory postTxt,
        string memory postImg
    ) public payable{
        require( msg.value == (1 ether), "Please submit 1 Matic." );
        post storage newPost = Posts[counter];
        newPost.postTxt = postTxt;
        newPost.postImg = postImg;
        newPost.creator = msg.sender;
        newPost.id = counter;
        emit postCreated(
            msg.sender,
            counter,
            postTxt,
            postImg
        );
        counter++;

        payable(owner).transfer(msg.value);

    }

    function getPost( uint256 id ) public view returns ( string memory, string memory, address ){
        require( id < counter, "No such Post." );

        post storage postId = Posts[id];
        return (postId.postTxt, postId.postImg, postId.creator);
    }
}