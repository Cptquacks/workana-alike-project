<?php

namespace App\Models;

use Database\Factories\StoreFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Store extends Model
{
    /** @use HasFactory<StoreFactory> */
    use HasFactory;

    /**
     * @var array<string>
     */
    protected $fillable = [
        'cover_image',
        'name',
        'description',
        'days_open',
        'open_time',
        'closing_time',
    ];

    /**
     * @var array<string, string>
     */
    protected $casts = [
        'user_id' => 'integer',
        'cover_image' => 'string',
        'name' => 'string',
        'description' => 'string',
        'days_open' => 'array',
        'open_time' => 'datetime:H:i',
        'closing_time' => 'datetime:H:i',
        'rate' => 'decimal:2',
        'visibility' => 'decimal:2',
    ];

    /**
     * @var array<string, mixed>
     */
    protected $attributes = [
        'rate' => 0.0,
        'visibility' => 1.0,
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function getCoverImageUrlAttribute(): ?string
    {
        return $this->cover_image
        ? asset('storage/'.$this->cover_image)
        : null;
    }

    public function service(): HasMany
    {
        return $this->hasMany(Service::class);
    }

    public function comment(): HasMany
    {
        return $this->hasMany(Comment::class);
    }
}
