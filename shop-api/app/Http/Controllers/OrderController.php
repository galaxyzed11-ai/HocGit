<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;

class OrderController extends Controller
{
    public function store(Request $request)
    {
        $order = Order::create([
            'user_id' => 1,
            'total_price' => $request->total_price
        ]);

        return response()->json($order);
    }
}
