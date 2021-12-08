import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Products</h1>
        <ul>
          <li>Products 1</li>
          <li>Products 2</li>
          <li>Products 3</li>
        </ul>
      </div>
    </Layout>
  );
}
