<?php

namespace App\Providers;

use Laravel\Passport\Passport;
// use Illuminate\Support\ServiceProvider;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Schema;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    protected $policies = [
        'App\Model'=> 'App\Policies\ModelPolicy',
    ];

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);   //Fix for SQLSTATE[42000]: 1071 Specified key was too long; max key length is 767 bytes

        $this->registerPolicies();

        Passport::routes();
    }
}
