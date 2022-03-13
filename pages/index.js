import Head from "next/head";
import Navbar from "../components/Navbar";
import Todo from "../components/Todo";
import { table, minifyRecords } from "./api/utils/airtable";

export default function Home({ initialTodos }) {
  return (
    <div>
      <Head>
        <title>Authenticated Todo App</title>
      </Head>
      <Navbar />
      <main>
        <h1>Todo App</h1>
        <ul>
          {initialTodos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const todos = await table.select({}).firstPage();
    return {
      props: {
        initialTodos: minifyRecords(todos),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        err: "Something went wrong",
      },
    };
  }
}
