import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { addToWishList, deleteFromWishList } from '../../pages/my-wish-list/MyWishListAction';
import { FcLike } from 'react-icons/fc';
import { BsHeart } from 'react-icons/bs';
import React from 'react';


const WishListButton = ({productId: productId}) => {
    const dispatch = useDispatch();
    const wishlist= useSelector(state => state.wishlist);
    let likeButton = [];
    if (wishlist.find(element => element === productId)) {
        likeButton.push(
            <Button onClick={() => dispatch(deleteFromWishList(productId))}>
                <FcLike></FcLike>
            </Button>
        )
    } else {
        likeButton.push(
            <Button onClick={() => dispatch(addToWishList(productId))}>
                <BsHeart></BsHeart>
            </Button>
        )
    }
    return likeButton;
}

export default WishListButton;