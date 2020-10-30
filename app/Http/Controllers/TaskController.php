<?php

namespace App\Http\Controllers;

use App\Http\Resources\TaskResource;
use Illuminate\Http\Request;
use App\Models\Task;

class TaskController extends Controller
{
    public function show(Task $task): TaskResource
    {
        return new TaskResource($task);
    }

    public function index(): TaskResource
    {
        return new TaskResource(Task::paginate());
    }
}
