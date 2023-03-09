import { FC } from "react";

import PageWrapper from "../../components/Wrappers/PageWrapper/PageWrapper";

import styles from "./About.module.scss";


const About: FC = () => {
  return (
    <PageWrapper className={styles.about}>
      <h1 className={styles.about__title}>
        This is a page about us !
      </h1>
      <p className={styles.about__text}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
        laudantium quis est iure ad distinctio, unde molestias voluptatibus
        consequuntur. Dolores culpa molestiae voluptatum commodi libero!
        Consectetur ea tempore adipisci numquam, totam, debitis laudantium odio
        distinctio magnam sequi soluta deserunt libero! Maxime officiis eligendi
        dicta! Provident dignissimos cum perferendis doloribus deleniti
        voluptate iste, quis delectus harum earum aperiam, voluptates facere, at
        reprehenderit modi pariatur atque porro eum quae quo enim non ea
        laboriosam impedit! Perspiciatis reiciendis, reprehenderit fugit,
        commodi adipisci harum odio maxime odit laborum atque fuga doloremque
        assumenda itaque nemo deserunt dolorem quas, nobis saepe quis cupiditate
        rem ad accusamus?
      </p>
    </PageWrapper>
  );
};

export default About;
