import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      const response = await axios.post('https://your-api-url/api/auth/signup', {
        email,
        password,
      });

      if (response.status === 200 || response.status === 201) {
        setSuccess('Account created successfully!');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div>
            <img
              src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
              className="w-32 mx-auto"
              alt="Logo"
            />
          </div>
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">Sign Up</h1>
            <div className="w-full flex-1 mt-8">
              <form onSubmit={handleSignup} className="mx-auto max-w-xs">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                >
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">Sign Up</span>
                </button>
                {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
                {success && <p className="mt-4 text-sm text-green-500">{success}</p>}
              </form>
              <p className="mt-6 text-xs text-gray-600 text-center">
                I agree to abide by templatana's{' '}
                <Link to="#" className="border-b border-gray-500 border-dotted">
                  Terms of Service
                </Link>{' '}
                and its{' '}
                <Link to="#" className="border-b border-gray-500 border-dotted">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

// Create Signup API Endpoint In your .NET backend, add an endpoint for handling signup requests:
[HttpPost("signup")]
public IActionResult Signup([FromBody] LoginModel model)
{
    if (string.IsNullOrEmpty(model.Email) || string.IsNullOrEmpty(model.Password))
    {
        return BadRequest(new { message = "Email and Password are required" });
    }

    // Simulate account creation (e.g., save to database)
    bool accountCreated = true; // Replace with actual logic

    if (accountCreated)
    {
        return Ok(new { message = "Account created successfully!" });
    }
    else
    {
        return StatusCode(500, new { message = "Something went wrong. Please try again." });
    }
}

public class LoginModel
{
    public string Email { get; set; }
    public string Password { get; set; }
}
// Enable CORS in .NET
// Add this in Startup.cs or Program.cs:

services.AddCors(options =>
    {
        options.AddPolicy("AllowReactApp", builder =>
        {
            builder.WithOrigins("http://localhost:3000") // Update to your React app's URL
                   .AllowAnyHeader()
                   .AllowAnyMethod();
        });
    });
    
    app.UseCors("AllowReactApp");
    





