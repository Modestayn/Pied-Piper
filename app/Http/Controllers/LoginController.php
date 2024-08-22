<?php

namespace App\Http\Controllers;

use App\Exceptions\Error;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class LoginController extends Controller
{
    public function login(Request $request): array
    {
        try {
            $validator = Validator::make($request->all(), [
                'email'         => ['required', 'email'],
                'password'      => ['required', 'string', 'min:6', 'max:255'],
            ]);

            if ($validator->fails()) {
                foreach ($validator->getMessageBag()->getMessages() as $message) {
                    throw new Error($message[0]);
                }
            }

            $user = User::where('email', $request->get('email'))
                ->first();

            if(!$user) {
                throw new Error('Wrong email or password.');
            }

            if (!Hash::check($request->get('password'), $user->password)) {
                throw new Error('Wrong email or password 1.');
            }

            $request->session()->put('user_id', $user->id);

            return [
                'success'       => true,
                'session_id'    => $request->session()->getId()
            ];

        } catch (Error $e) {
            return [
                'success' => false,
                'message' => $e->getMessage(),
            ];
        } catch (Exception $e) {
            return [
                'success' => false,
                'message' => 'Something went wrong'
            ];
        }
    }
}
