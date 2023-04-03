// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

contract foodify{
    address public owner;
    uint256 private counter;
    uint256 private priority;

    constructor(){
        counter = 0;
        owner = msg.sender;
        priority = 0;
    }

    struct post{
        address creator;
        uint256 id;
        string postTxt;
        string postImg;
        uint256 priority;
        uint256 upvotes;
        uint256 downvotes;
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
        post storage newPost = Posts[counter];
        newPost.postTxt = postTxt;
        newPost.postImg = postImg;
        newPost.creator = msg.sender;
        newPost.id = counter;
        newPost.priority = 0;
        newPost.upvotes = 0;
        newPost.downvotes = 0;
        
        emit postCreated(
            msg.sender,
            counter,
            postTxt,
            postImg
        );
        counter++;
    }

    function getPost( uint256 id ) public view returns ( string memory, string memory, address, uint256, uint256, uint256 ){
        require( id < counter, "No such Post." );
        post storage postId = Posts[id];
        return (postId.postTxt, postId.postImg, postId.creator, postId.priority, postId.upvotes, postId.downvotes);
    }

    function upvotePost( uint256 id ) public{
        require( id < counter, "No such Post." );
        Posts[id].upvotes++;
        Posts[id].priority++;
    }

    function downvotePost( uint256 id ) public{
        require( id < counter, "No such Post." );
        Posts[id].downvotes++;
        Posts[id].priority--;
    }
    
}