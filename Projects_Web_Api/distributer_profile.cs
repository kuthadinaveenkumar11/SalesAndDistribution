//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Projects_Web_Api
{
    using System;
    using System.Collections.Generic;
    
    public partial class distributer_profile
    {
        public string Name { get; set; }
        public decimal ContactNumber { get; set; }
        public string FirmName { get; set; }
        public string Address { get; set; }
        public int TINNo { get; set; }
        public string PANNo { get; set; }
        public string BankIFSCCode { get; set; }
        public decimal BankAccountNumber { get; set; }
    
        public virtual distributerlogin distributerlogin { get; set; }
    }
}
