<?php

// app/Http/Middleware/WrapApiResponse.php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ApiResponseWrapper
{
    public function handle(Request $request, Closure $next)
    {
        $response = $next($request);

        if (
            $response instanceof JsonResponse
            && $request->is('api/*')
            && ! $this->isAlreadyWrapped($response)
        ) {
            $original = $response->getData(true);
            if ($response->getStatusCode() >= 400) {
                $response->setData([
                    'status' => 'error',
                    'message' => $original['message'] ?? 'Error',
                    'errors' => $original['errors'] ?? null,
                ]);
            } else {
                $response->setData([
                    'status' => 'ok',
                    'data' => $original,
                ]);
            }
        }

        return $response;
    }

    private function isAlreadyWrapped(JsonResponse $response): bool
    {
        $data = $response->getData(true);

        return is_array($data) && array_key_exists('status', $data);
    }
}
