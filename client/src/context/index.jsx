import React, { useContext, createContext } from 'react';
import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const { contract } = useContract('0xd53Ef94aa201Dcfd234b1840D0AF7F9eD3F76CA8');
    const { mutateAsync: uploadPost } = useContractWrite(contract, 'uploadPost');

    // Get the wallet address and connect to Metamask
    const address = useAddress();
    const connect = useMetamask();

    const publishPost = async (form) => {
        try {
    
            // NOTE* Parameters to be given the same order
            // the smart contract
          const data = await uploadPost([
            address, // owner
            form.postTxt, 
            form.postImg,
            form.priority,
            form.upvotes,
            form.downvotes
          ])
    
          console.log("contract call success", data)
        } catch (error) {
          console.log("contract call failure", error)
        }
    }

    const getPost = async () => {
        const posts = await contract.call('getPost');

        const parsedPosts = posts.map((post, i) => ({
            creator: post.creator,
            postTxt: post.postTxt,
            postImg: post.postImg,  
            priority: post.priority,
            upvotes: post.upvotes,
            downvotes: post.downvotes,
            id: i
        }));

        return parsedPosts;
    }

    const getUserPost = async () => {
        const allPosts = await getPost();
        const filteredPosts = allPosts.filter((post) => post.creator === address );
        return filteredPosts;
    }

    return(
        <StateContext.Provider
            value={{
                address,
                contract,
                connect,
                uploadPost: publishPost,
                getPost,
                getUserPost
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);
