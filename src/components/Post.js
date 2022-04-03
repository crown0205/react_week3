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
        
        <Grid padding="16px 16px 0">
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
  image_url: "https://i.pinimg.com/736x/4a/c2/95/4ac2952bad5617be9755ff25483f3d81.jpg",
  contents: "json provides metadata used when your web app is installed on a'users mobile device or desktop.",
  comment_cnt: 10,
  insert_dt: "2022-03-09 11:32:00"
}

export default Post;