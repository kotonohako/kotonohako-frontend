"use client";
import styles from './page.module.css'
import axios from "axios"
import { getJSON } from '../services/api'
import useSWR from "swr"

const instance = axios.create({
    baseURL: "localhost:8080",
})

export default function About() {
    // const response = getJSON();
    const { data, error } = useSWR("http://localhost:8080/hello", getJSON)
    // console.log(data);

    // const response = "data";
    // console.log(`response: ${response}`);
    return (
        <main className={styles.main}>
            <div>{data}</div>
        </main>
    )
}