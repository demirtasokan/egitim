using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Tarim.Northwind.Business.Abstract;
using Tarim.Northwind.Entities.Concrete;

namespace Tarim.Northwind.WebAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/Products")]
    public class ProductsController : Controller
    {
        private IProductService _productService;
        public ProductsController(IProductService productService)
        {
            _productService = productService;
        }
        // GET api/values
        [HttpGet("list")]
        public ActionResult Get()
        {
            return  Ok(_productService.GetList());
        }

        [HttpGet("listbyCategory")]
        public ActionResult Get(int categoryId)
        {
            return Ok(_productService.GetByCategory(categoryId));
        }
    }
}