import React from "react";
import {Grid, Image, Text} from "../elements/index"

const Post = (props) => {

  return (
    <React.Fragment>
      <Grid padding="16px">

        <Grid is_flex>
          <Image shape="circle" src={props.user_info.user_profile} />
          <Text bold>{props.user_info.user_name}</Text>
          <Text>{props.insert_dt}</Text>
        </Grid>

        <Grid margin="16px 0 0">
          <Image shape="rectangle" src={props.image_url}/>
        </Grid>
        
        <Grid padding="16px">
          <Text>{props.contents}</Text>
        </Grid>

        <Grid padding="16px">
          <Text bold>댓글 {props.comment_cnt}개</Text>
          {/* 아이콘 들어갈 자리 ❤️ */}
        </Grid>
        <div> user profile/ user name/ insert_dt</div>
        <div>contents</div>
        <div>image</div>
        <div>comment cnt</div>
      </Grid>
    </React.Fragment>
  )
}

Post.defaultProps = {
  user_info: {
    user_name: "BaoBab",
    user_profile:"https://i.pinimg.com/564x/ee/50/57/ee505776528eb9a40f8cf55b03df978f.jpg",
  },
  image_url: "https://i.pinimg.com/564x/d0/9d/ef/d09def56a001edcbccb9cf35d5a6d599.jpg",
  contents: "내가 그린그림 잘 그린기린그림",
  comment_cnt: 10,
  insert_dt: "2022-03-09 11:32:00"
}

export default Post;