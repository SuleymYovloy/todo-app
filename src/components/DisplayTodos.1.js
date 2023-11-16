import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { AnimatePresence, motion } from "framer-motion";

export const DisplayTodos = (props) => {
    const [sort, setSort] = useState("active");
    return (
        <div className="displaytodos">
            <div className="buttons">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSort("active")}
                >
                    Активные
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSort("completed")}
                >
                    Выполненые
                </motion.button>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSort("all")}
                >
                    Все
                </motion.button>
            </div>
            <ul>
                <AnimatePresence>
                    {props.todos.length > 0 && sort === "active"
                        ? props.todos.map((item) => {
                              return (
                                  item.completed === false && (
                                      <TodoItem
                                          key={item.id}
                                          item={item}
                                          removeTodo={props.removeTodo}
                                          updateTodo={props.updateTodo}
                                          completeTodo={props.completeTodo}
                                      />
                                  )
                              );
                          })
                        : null}
                    {/* for completed items */}
                    {props.todos.length > 0 && sort === "completed"
                        ? props.todos.map((item) => {
                              return (
                                  item.completed === true && (
                                      <TodoItem
                                          key={item.id}
                                          item={item}
                                          removeTodo={props.removeTodo}
                                          updateTodo={props.updateTodo}
                                          completeTodo={props.completeTodo}
                                      />
                                  )
                              );
                          })
                        : null}
                    {/* for all items */}
                    {props.todos.length > 0 && sort === "all"
                        ? props.todos.map((item) => {
                              return (
                                  <TodoItem
                                      key={item.id}
                                      item={item}
                                      removeTodo={props.removeTodo}
                                      updateTodo={props.updateTodo}
                                      completeTodo={props.completeTodo}
                                  />
                              );
                          })
                        : null}
                </AnimatePresence>
            </ul>
        </div>
    );
};
