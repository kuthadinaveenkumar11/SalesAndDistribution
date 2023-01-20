using Projects_Web_Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Projects_Web_Api.Repos
{
    public interface InterfaceOfDis
    {
        Model_Of_Drisributer_Profile Get_Of_Drisributer_Profile(string PAN);
        Model_Of_Drisributer_Profile Get_of_Drisributer_Login(string username, string password);

        List<Model_of_Product> Get_Of_Products();



        List<Model_of_Dis_product> Dis_Products();

        string Orderstatus(Model_of_Status models);
        List<Model_of_Status> Get_Of_OrderProducts();

    }
    public class ClassofDis : InterfaceOfDis
    {
        scorpioDBEntities obj = new scorpioDBEntities();

        Model_Of_Drisributer_Profile InterfaceOfDis.Get_Of_Drisributer_Profile(string PAN)
        {
            var obbj = obj.distributer_profiles.Where(n => n.PANNo == PAN).FirstOrDefault();
            if (obbj != null)
            {
                var dis = obj.distributer_profiles.Where(n => n.PANNo == PAN).Select(s => new Model_Of_Drisributer_Profile()
                {
                    Name = s.Name,
                    ContactNumber = s.ContactNumber,
                    PANNo = s.PANNo
                }).FirstOrDefault();
                return dis;
            }
            
            return null;
        }
        Model_Of_Drisributer_Profile InterfaceOfDis.Get_of_Drisributer_Login(string username,string password)
        {
            var dis = obj.distributerlogins.Where(n => n.username ==username && n.password==password).FirstOrDefault();
            if (dis != null)
            {
                var outputt = obj.distributer_profiles.Select(s => new Model_Of_Drisributer_Profile()
                {
                    Name = s.Name,
                    PANNo = s.PANNo
                }).FirstOrDefault();
                return outputt;

            }
            return null;

        }
        List<Model_of_Product> InterfaceOfDis.Get_Of_Products()
        {
            List<Model_of_Product> ff = obj.Wareproducts.Select(s => new Model_of_Product()
            {
                Name=s.Name,
                Discription=s.Discription,
                image=s.image,
                Product_id=s.Product_id,
                Price=s.Price,
                Type=s.Type,
                Quantity=s.Quantity
            }).ToList<Model_of_Product>();
            return ff;
        }

        List<Model_of_Dis_product> InterfaceOfDis.Dis_Products()
        {
            List<Model_of_Dis_product> ff = obj.Distributer_Product.Select(s => new Model_of_Dis_product()
            {
                Name = s.Name,
                Descripction = s.Descripction,
                Image = s.Image,
                Product_id = s.Product_id,
                Price = s.Price,
                Type = s.Type,
                Quantity = s.Quantity
            }).ToList<Model_of_Dis_product>();
            return ff;
        }


        string InterfaceOfDis.Orderstatus(Model_of_Status models)
        {
            var ff = obj.Status_Table.Where(s => s.OrderID == models.OrderID).FirstOrDefault();
            var Dispro = obj.Wareproducts.Where(s => s.Name == models.ProductName).FirstOrDefault();
            
            if (ff == null)
            {
                Dispro.Quantity = Dispro.Quantity- models.Quantity;
                
                obj.Status_Table.Add(new Status_Table()
                {
                    
                    OrderID = models.OrderID,
                    ProductID = models.ProductID,
                    OrderPlacedDate = models.OrderPlacedDate,
                    ProductName = models.ProductName,
                    Quantity = models.Quantity,
                    Status = models.Status,
                    TotalCost = models.TotalCost,
                    Type = models.Type
                });
                obj.SaveChanges();
                obj.Dispose();
                return "Inserted";
            }
            return "Not Inserted";

        }
        List<Model_of_Status> InterfaceOfDis.Get_Of_OrderProducts()
        {
            List<Model_of_Status> ff = obj.Status_Table.Select(s => new Model_of_Status()
            {
                OrderID = s.OrderID,
                ProductID = s.ProductID,
                OrderPlacedDate = s.OrderPlacedDate,
                ProductName = s.ProductName,
                Quantity = s.Quantity,
                Status = s.Status,
                TotalCost = s.TotalCost,
                Type = s.Type
            }).ToList<Model_of_Status>();
            return ff;
        }


    }

}
