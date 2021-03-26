import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getPrismicClient } from '../../services/prismic';
import Prismic from '@prismicio/client';

import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Epoch News</title>
      </Head>

      <main  className={styles.container}>
        <div className={styles.posts}>
          <a>
            <time>de march 2012</time>
            <strong>
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Architecto nisi provident delectus repellat fugiat inventore 
              officia magni, nihil esse rem!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Architecto nisi provident delectus repellat fugiat inventore 
              officia magni, nihil esse rem!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Architecto nisi provident delectus repellat fugiat inventore 
              officia magni, nihil esse rem!
            </p>
          </a>
          <a>
            <time>de march 2012</time>
            <strong>
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Architecto nisi provident delectus repellat fugiat inventore 
              officia magni, nihil esse rem!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Architecto nisi provident delectus repellat fugiat inventore 
              officia magni, nihil esse rem!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Architecto nisi provident delectus repellat fugiat inventore 
              officia magni, nihil esse rem!
            </p>
          </a>
          <a>
            <time>de march 2012</time>
            <strong>
              Lorem, ipsum dolor sit amet consectetur adipisicing.
            </strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Architecto nisi provident delectus repellat fugiat inventore 
              officia magni, nihil esse rem!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Architecto nisi provident delectus repellat fugiat inventore 
              officia magni, nihil esse rem!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Architecto nisi provident delectus repellat fugiat inventore 
              officia magni, nihil esse rem!
            </p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'posts')
  ], {
    fetch: ['posts.title', 'posts.content'],
    pageSize: 100,
  });

  console.log(response);

  return {
    props: {}
  }
}
