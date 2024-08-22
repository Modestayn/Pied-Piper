<?php

namespace App\Http\Controllers;

use App\Exceptions\Error;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class RegistrationController extends Controller
{
    public function register(Request $request): array {
        try {
            $validator = Validator::make($request->all(), [
                'email'         => ['required', 'email'],
                'password'      => ['required', 'string', 'min:6', 'max:255'],
                'repeat'        => ['required', 'string'],
            ]);

            if ($validator->fails()) {
                foreach ($validator->getMessageBag()->getMessages() as $message) {
                    throw new Error($message[0]);
                }
            }

            if ($request->get('password') != $request->get('repeat')) {
                throw new Error('Password doesn\'t match.');
            }

            $user = User::where('email', $request->get('email'))->first();

            if($user) {
                throw new Error('User has already been registered.');

            } else {
                $user = User::create([
                    'name'      => '',
                    'role'      => 'user',
                    'email'     => $request->get('email'),
                    'password'  => Hash::make($request->get('password'))
                ]);

                $request->session()->put('user_id', $user->id);
            }

            return [
                'success'       => true,
                'session_id'    => $request->session()->getId()
            ];

        } catch (Error $e) {
            return [
                'success' => false,
                'message' => $e->getMessage()
            ];
        } catch (Exception $e) {
            return [
                'success' => false,
                'message' => 'Something went wrong'
            ];
        }
    }
}
