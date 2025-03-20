using AltecSystem.Application.Interfaces;
using Microsoft.AspNetCore.Mvc;

[Route("api/auth")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;

    public AuthController(IAuthService authService)
    {
        _authService = authService;
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginRequestDto loginDto)
    {
        var token = await _authService.AuthenticateAsync(loginDto.Username, loginDto.Password);
        if (token == null)
            return Unauthorized(new { message = "Credenciales incorrectas" });

        return Ok(new { token });
    }
}