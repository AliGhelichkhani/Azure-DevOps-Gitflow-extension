WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

builder.Services.AddOpenApi();
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});
builder.Services.AddControllers();

var app = builder.Build();
if (app.Environment.IsDevelopment())
    app.MapOpenApi();
app.UseHttpsRedirection();
app.UseStaticFiles();
app.MapGet("/", context =>
{
    context.Response.Redirect("index.html");
    return Task.CompletedTask;
});
app.UseCors();
app.MapControllers();

app.Run();