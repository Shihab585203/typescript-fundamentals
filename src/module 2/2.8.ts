{
  //simulate

  type ToDo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

  const getToDo = async (): Promise<ToDo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
    return data;

  };
  getToDo();

  type Something = { something: string };

  const createPromise = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
      const data: Something = { something: "something" };

      if (data) {
        resolve(data);
      } else {
        reject("failed to load data");
      }
    });
  };

  //calling create promise function

  const showData = async (): Promise<Something> => {
    const data: Something = await createPromise();
    console.log(data);
    return data;
  };
  showData();
}