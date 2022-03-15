import Head from "next/head";
import Navbar from "../components/Navbar";
import Todo from "../components/Todo";
import { table, minifyRecords } from "./api/utils/airtable";
import { TodosContext } from "../contexts/TodosContext";
import { useEffect, useContext } from "react";
import TodoForm from "../components/TodoForm";
import { useUser } from "@auth0/nextjs-auth0";

export default function Home({ initialTodos }) {
  const { todos, setTodos } = useContext(TodosContext);
  const { user, isLoading } = useUser();

  useEffect(() => {
    setTodos(initialTodos);
  }, []);

  return (
    <div>
      <Head>
        <title>Authenticated Todo App</title>
      </Head>
      <Navbar user={user} />
      <main>
        <h1>Todo App</h1>
        {user && (
          <>
            <TodoForm />
            <ul>
              {todos && todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
            </ul>
          </>
        )}
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
