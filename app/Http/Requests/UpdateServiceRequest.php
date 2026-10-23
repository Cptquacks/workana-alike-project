<?php

namespace App\Http\Requests;

use App\Models\Store;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateServiceRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        $store = $this->route('store');

        return $store instanceof Store && ($this->user()?->id === $store->user_id);
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'sometimes|required|string|max:255',
            'description' => 'sometimes|nullable|string|max:511',
            'cost' => 'sometimes|required|decimal:0,2',
            'currency' => 'sometimes|required|string|in:CUP,USD,ZELLE,USDT',
        ];
    }
}
