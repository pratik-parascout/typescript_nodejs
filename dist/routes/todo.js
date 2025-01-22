"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos = [];
const router = (0, express_1.Router)();
router.get('/', (req, res, _next) => {
    return res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, _next) => {
    const body = req.body;
    const newTodo = {
        id: new Date().toISOString(),
        text: body.text,
    };
    todos.push(newTodo);
    return res
        .status(201)
        .json({ message: 'Created the todo.', createTodo: newTodo });
});
router.post('/edit-todo/:todoId', (req, res, _next) => {
    const params = req.params;
    const tid = params.todoId;
    const todoIndex = todos.findIndex((todoItem) => todoItem.id === tid);
    if (todoIndex === -1) {
        return res
            .status(404)
            .json({ message: 'Could not find todo for this id.' });
    }
    else {
        const body = req.body;
        todos[todoIndex].text = body.text;
        return res
            .status(200)
            .json({ message: 'Updated the todo.', updateTodo: todos[todoIndex] });
    }
});
router.post('/delete-todo/:todoId', (req, res, _next) => {
    const params = req.params;
    const tid = params.todoId;
    const todoIndex = todos.findIndex((todoItem) => todoItem.id === tid);
    if (todoIndex === -1) {
        return res
            .status(404)
            .json({ message: 'Could not find todo for this id.' });
    }
    else {
        todos.splice(todoIndex, 1);
        return res.status(200).json({ message: 'Deleted the todo.' });
    }
});
exports.default = router;
