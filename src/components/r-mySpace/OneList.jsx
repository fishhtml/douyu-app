import React, { Component, ReactDOM } from 'react'
import styled from 'styled-components'
import { Candy, Status } from '../../components'

class OneList extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.listNode = React.createRef()
    // this.showGift.bind(this)
  }

  // showGift() {
  //   const thisElement = ReactDOM.findDOMNode(this);
  //   const currentHeight = document.defaultView.getComputedStyle(thisElement).height;
  //   // const maxHeight = currentHeight === '100px' ? '338px' : '318px';
  //   let targetHeight = 0;
  //   if (currentHeight === '100px') targetHeight = '338px';
  //   if (currentHeight === '88px') targetHeight = '318px';
  //   if (currentHeight === '338px') targetHeight = '100px';
  //   if (currentHeight === '318px') targetHeight = '88px';
  //   this.setState({
  //     style: {
  //       height: targetHeight,
  //     }
  //   })
  // }

  render() {
    const { gift } = this.props
    return (
      <List style={this.state.style} ref={this.listNode}>
        <Status {...this.props} />
        <CandyBox>
          {
            gift.map(({
              mimg,
              name,
              pc,
              gx
            }, index) => (
                <Candy key={index}
                  mimg={mimg}
                  name={name}
                  pc={pc}
                  gx={gx}
                />
              ))
          }
        </CandyBox>
      </List>

    )
  }
}

const List = styled.li`
  overflow: hidden;
  box-sizing: border-box;
  width: 47%;
  display: inline-block;
  vertical-align: top;
  background-color: #ccc;
  border-radius: 3px;
  padding: 0 3px 3px;
  transition: height 0.5s;
  margin: 3px 2% 2% auto;
  height: 100px;
  & * {
    box-sizing: border-box;
  }
  @media screen and (max-width: 600px) {
    width: 100%;
    margin: 3px 0 0 auto;
    height: 88px;
  }
`
// const Status = styled.div`
//   width: 100%;
//   padding: 13px 10px;
//   overflow: hidden;
//   /* @media screen and (max-width: 600px) {
//     height: 88px;
//   } */
// `
const OwnerPhoto = styled.img`
  height: 75px;
  width: 75px;
  max-width: 75px;
  border-radius: 50%;
  float: left;
  @media screen and (max-width: 600px) {
    height: 60px;
    width: 60px;
  }

`
const Popularity = styled.div`
  padding-left: 10px;
  float: left;
  height: 50px;
  line-height: 2;
  width: 75%;
  @media screen and (max-width: 600px) {
    padding-left: 10px;
    line-height: 1.7;
    font-size: 12px;
  }
`
const giftButtom = {
  fontSize: '18px',
  color: '#CC3333',
  display: 'inline-block',
  marginLeft: '12px'

}
const CandyBox = styled.ul`
  clear: both;
  padding: 0 0 0 12px;
  line-height: 20px;
  height: 230px;
  overflow: hidden;
  margin-top: 0;
  margin-bottom: 0;
  & li {
    height: 20px;
    line-height: 20px;
    margin-top: 5px;
  }
  & img {
    border-radius: 50%;
    width: 20px;
    float: left;
  }
  & span {
    font-size: 16px;
    float: left;
    height: 20px;
    line-height: 20px;
    margin-left: 5px;
  }
`

export default OneList