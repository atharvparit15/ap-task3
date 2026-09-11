function TaskItem({ task, toggleTask, deleteTask }) {
  return (
    <div className="flex items-center justify-between border-b py-3">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />

        <span
          className={
            task.completed
              ? "line-through text-gray-400"
              : "text-gray-800"
          }
        >
          {task.text}
        </span>
      </div>

      <button
        onClick={() => deleteTask(task.id)}
        className="bg-red-500 text-white px-3 py-1 rounded"
      >
        Delete
      </button>
    </div>
  );
}

export default TaskItem;
