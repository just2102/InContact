import s from './Post.module.css'
//import image from '../../../../img/post1.jpg'

const Post = (props) => {
  
    return ( 
      <div className={s.item}>
        <div className={s.item_image_container}><img src={props.image} alt="" /></div>
        <div className={s.item_body}>{props.body}</div>
        <button className={s.item_like}>Like  {props.likeCount}</button>
        <button className={s.item_share}>Share</button>
      </div>

     );
}
 
export default Post;