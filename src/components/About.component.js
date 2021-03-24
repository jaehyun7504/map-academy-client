import React from "react";
import useStyles from "../styles/About.styles";
import Footer from "./Footer.component";
import motto from "../assets/images/item-1.jpg";
import goal from "../assets/images/item-2.jpg";

function About() {
  const classes = useStyles();
  return (
    <div className={classes.About}>
      <div className={classes.philosophyContainer}>
        <div className={classes.philosophy}>
          <h1 className={classes.h1}>교육은 마중물이다</h1>
          <p className={classes.p}>
            이것이 맵학원의 교육 철학입니다. 마중물을 부어주면서 펌프질을 해야
            물이 나옵니다.
            <br />
            하지만 흘러 나오는 물은 이미 지하에 있었지 새로 만들어진 것이
            아닙니다.
            <br />
            교육은 창조행위가 아니라 아이가 이미 가지고 있는 능력을 끌어내는
            마중물과 같은 것입니다.
            <br />
            교육자로서 교육 과정을 창조적으로 운영하되 창조자라는 교만에 빠지지
            않겠습니다.
          </p>
        </div>
      </div>
      <div className={classes.tiltsContainer}>
        <div className={classes.tilts}>
          <div className={`${classes.tilt} ${classes.motto}`}>
            <div className={classes.image}>
              <img src={motto} alt="Motto" />
            </div>
            <div className={classes.box}>
              <h4 className={classes.h4}>원훈</h4>
              <h2 className={classes.h2}>CHANGE</h2>
              <p className={classes.meaning}>Verb. 변하다, 변화시키다</p>
            </div>
          </div>
          <div className={`${classes.tilt} ${classes.education}`}>
            <h4 className={classes.h4}>교육 목표 구현을 위한 중점 교육</h4>
            <div className={classes.listContainer}>
              <ul className={classes.list}>
                <li className={classes.item}>
                  <i className={`${classes.itemIcon} far fa-check-square`}></i>
                  <span>인성 교육</span>
                </li>
                <li className={classes.item}>
                  <i className={`${classes.itemIcon} far fa-check-square`}></i>
                  <span>독서 교육</span>
                </li>
                <li className={classes.item}>
                  <i className={`${classes.itemIcon} far fa-check-square`}></i>
                  <span>진학&bull;진로 교육</span>
                </li>
                <li className={classes.item}>
                  <i className={`${classes.itemIcon} far fa-check-square`}></i>
                  <span>국제적 마인드 형성을 위한 영어 교육</span>
                </li>
                <li className={classes.item}>
                  <i className={`${classes.itemIcon} far fa-check-square`}></i>
                  <span>창의적 사고력 형성을 위한 수학 교육</span>
                </li>
                <li className={classes.item}>
                  <i className={`${classes.itemIcon} far fa-check-square`}></i>
                  <span>자기주도학습법 교육</span>
                </li>
              </ul>
            </div>
          </div>
          <div className={`${classes.tilt} ${classes.goal}`}>
            <div className={classes.image}>
              <img src={goal} alt="Goal" />
            </div>
            <div className={classes.box}>
              <h4 className={classes.h4}>교육 목표</h4>
              <h2 className={classes.h2}>
                <span className={classes.s1}>
                  올바른&nbsp;&nbsp;&nbsp;인성의
                </span>
                <br />
                <span className={classes.s2}>창의적 인재 육성</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
