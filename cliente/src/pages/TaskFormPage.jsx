import { useForm} from 'react-hook-form'
import { useTasks } from '../context/TaskContext';
import { Fragment } from 'react';

const TaskFormPage = () => {

  const { register, handleSubmit } = useForm();
  const { createTask} = useTasks()


  const onSubmit = handleSubmit((data) => {
    createTask(data);
  })


 /* const onSubmit = handleSubmit((data) => {
    console.log(data);
  }) */
  return (
    <Fragment>
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <form onSubmit={onSubmit}>
          <input type="text" className="min-w-full bg-zinc-700 text-white px-4 my-4 md-2" placeholder="Title" {...register("title")}/>
          <textarea rows="3" className="min-w-full bg-zinc-700  text-white px-4 my-4 md-2 " {...register("description")}></textarea>
          <button>
            save
          </button>
        </form>
      </div>
    </Fragment>
  )
}

export default TaskFormPage
