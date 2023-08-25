import React from 'react';
import clsx from 'clsx';
import 'css-doodle';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '限制',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    // url: 'https://gd-hbimg.huaban.com/a1c1c143228590b92a80c0f114490f900b81546d3ce81-Vbt3yt',
    wrapperClass: 'limit',
    description: (
      <div className={styles.text}>
        成为355进阶玩家的第一步，无疑是接触限制流玩法。目前标准游戏下最常见的限制流玩法为禁无双玩法，不过鉴于无双技能的观赏性，也推荐禁属性玩法。
      </div>
    ),
  },
  {
    title: '竞分',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    wrapperClass: 'score',
    description: (
      <div className={styles.text}>
        以最求通关时更高武勋为目的的玩法，武勋的数量以关卡通关后的结算结果为准。
      </div>
    ),
  },
  {
    title: '竞速',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    wrapperClass:'speed',
    description: (
      <div className={styles.text}>
        以追求更快速度通关为目的的玩法，通关速度以通关后的结算页面为准
      </div>
    ),
  },
];

function Feature({wrapperClass, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        
        {/* <div style={{background:`url(${url})`}} className={styles.featureSvg}> </div> */}
        <div className={styles.doodleWrapper}>
        <css-doodle>
        {`@grid: 1 / 300px;
          background: @svg(
          viewBox: 0 0 90 90;
          fill: none;
          stroke: #E7CF63;
          stroke-width: .8;
          stroke-linecap: square;
          rect { x, y: 2; width, height: 86 }
          rect { x, y: 10; width, height: 70 }

          path {
            d: M 8 8
              @p.@M19.@pn(v-2 h-2 v-2 h6 v2 h-2 v2, h6)
              @flipH.@invert.@lp
              @flip.@lp
              @flipV.@invert.@lp
        }
      )`}
    </css-doodle>
    <div className={`${styles.imgWrapper} ${styles[wrapperClass]}`}></div>
    </div>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
