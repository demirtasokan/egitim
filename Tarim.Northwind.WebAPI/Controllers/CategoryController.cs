using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Tarim.Northwind.Business.Abstract;

namespace Tarim.Northwind.WebAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/Category")]
    public class CategoryController : Controller
    {
        private ICategoryService _categoryService;
        public CategoryController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }
        // GET api/values
        [HttpGet("list")]
        public ActionResult Get()
        {
            return Ok(_categoryService.GetList());
        }
    }
}