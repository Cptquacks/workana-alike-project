<?php

namespace Database\Factories;

use App\Models\Store;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Store>
 */
class StoreFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->company(),
            'description' => fake()->sentence(),
            'days_open' => ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
            'open_time' => '09:00',
            'closing_time' => '18:00',
            'user_id' => User::factory(),
        ];
    }
}
