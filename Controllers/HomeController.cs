using Microsoft.AspNetCore.Mvc;

namespace GitFlowAzureDevOpsExtension.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult Get() => Ok(new { Message = "Hello from Azure DevOps .NET Core Extension!" });
    }
}
