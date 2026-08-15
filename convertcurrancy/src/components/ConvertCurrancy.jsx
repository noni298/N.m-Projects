import { useState } from "react";
const  ConvertCurrancy= () => {
const currancy = [
  {'id': 1, 'country_name': 'Albania', 'Currency_code': 'ALL'},
  {'id': 2, 'country_name': 'Afghanistan', 'Currency_code': 'AFN'},
  {'id': 3, 'country_name': 'Argentina', 'Currency_code': 'ARS'},
  {'id': 4, 'country_name': 'Aruba', 'Currency_code': 'AWG'},
  {'id': 5, 'country_name': 'Australia', 'Currency_code': 'AUD'},
  {'id': 6, 'country_name': 'Azerbaijan', 'Currency_code': 'AZN'},
  {'id': 7, 'country_name': 'Bahamas', 'Currency_code': 'BSD'},
  {'id': 8, 'country_name': 'Barbados', 'Currency_code': 'BBD'},
  {'id': 9, 'country_name': 'Belarus', 'Currency_code': 'BYN'},
  {'id': 10, 'country_name': 'Belize', 'Currency_code': 'BZD'},
  {'id': 11, 'country_name': 'Bermuda', 'Currency_code': 'BMD'},
  {'id': 12, 'country_name': 'Bolivia', 'Currency_code': 'BOB'},
  {'id': 13, 'country_name': 'Bulgaria', 'Currency_code': 'BGN'},
  {'id': 14, 'country_name': 'Brazil', 'Currency_code': 'BRL'},
  {'id': 15, 'country_name': 'Cambodia', 'Currency_code': 'KHR'},
  {'id': 16, 'country_name': 'Canada', 'Currency_code': 'CAD'},
  {'id': 17, 'country_name': 'Cayman Islands', 'Currency_code': 'KYD'}, // Corrected "Cayman" to "Cayman Islands"
  {'id': 18, 'country_name': 'Chile', 'Currency_code': 'CLP'},
  {'id': 19, 'country_name': 'Egypt', 'Currency_code': 'EGP'},
  {'id': 20, 'country_name': 'Iceland', 'Currency_code': 'ISK'},
  {'id': 21, 'country_name': 'India', 'Currency_code': 'INR'},
  {'id': 22, 'country_name': 'Indonesia', 'Currency_code': 'IDR'},
  {'id': 23, 'country_name': 'Japan', 'Currency_code': 'JPY'},
  {'id': 24, 'country_name': 'South Korea', 'Currency_code': 'KRW'}, // Clarified "Korea (South)"
  {'id': 25, 'country_name': 'North Korea', 'Currency_code': 'KPW'}, // Clarified "Korea (North)"
  {'id': 26, 'country_name': 'Lebauchery', 'Currency_code': 'LBP'},
  {'id': 27, 'country_name': 'Malaysia', 'Currency_code': 'MYR'},
  {'id': 28, 'country_name': 'Oman', 'Currency_code': 'OMR'},
  {'id': 29, 'country_name': 'Pakistan', 'Currency_code': 'PKR'},
  {'id': 30, 'country_name': 'Qatar', 'Currency_code': 'QAR'},
  {'id': 31, 'country_name': 'Russia', 'Currency_code': 'RUB'},
  {'id': 32, 'country_name': 'Saudi Arabia', 'Currency_code': 'SAR'},
  {'id': 33, 'country_name': 'Sweden', 'Currency_code': 'SEK'},
  {'id': 34, 'country_name': 'Switzerland', 'Currency_code': 'CHF'},
  {'id': 35, 'country_name': 'Suriname', 'Currency_code': 'SRD'},
  {'id': 36, 'country_name': 'Syria', 'Currency_code': 'SYP'},
  {'id': 37, 'country_name': 'Turkey', 'Currency_code': 'TRY'},
  {'id': 38, 'country_name': 'United States', 'Currency_code': 'USD'},
  {'id': 39, 'country_name': 'Uruguay', 'Currency_code': 'UYU'},
  {'id': 40, 'country_name': 'Uzbekistan', 'Currency_code': 'UZS'},
  {'id': 41, 'country_name': 'Yemen', 'Currency_code': 'YER'},
  {'id': 42, 'country_name': 'Zimbabwe', 'Currency_code': 'ZWL'}, // Corrected 'ZWD' to 'ZWL' (current currency)
  {'id': 43, 'country_name': 'Algeria', 'Currency_code': 'DZD'},
  {'id': 44, 'country_name': 'Andorra', 'Currency_code': 'EUR'},
  {'id': 45, 'country_name': 'Angola', 'Currency_code': 'AOA'},
  {'id': 46, 'country_name': 'Antigua and Barbuda', 'Currency_code': 'XCD'},
  {'id': 47, 'country_name': 'Armenia', 'Currency_code': 'AMD'},
  {'id': 48, 'country_name': 'Austria', 'Currency_code': 'EUR'},
  {'id': 49, 'country_name': 'Bahrain', 'Currency_code': 'BHD'},
  {'id': 50, 'country_name': 'Bangladesh', 'Currency_code': 'BDT'},
  {'id': 51, 'country_name': 'Belgium', 'Currency_code': 'EUR'},
  {'id': 52, 'country_name': 'Benin', 'Currency_code': 'XOF'},
  {'id': 53, 'country_name': 'Bhutan', 'Currency_code': 'BTN'},
  {'id': 54, 'country_name': 'Bosnia and Herzegovina', 'Currency_code': 'BAM'},
  {'id': 55, 'country_name': 'Botswana', 'Currency_code': 'BWP'},
  {'id': 56, 'country_name': 'British Virgin Islands', 'Currency_code': 'USD'},
  {'id': 57, 'country_name': 'Brunei', 'Currency_code': 'BND'},
  {'id': 58, 'country_name': 'Burkina Faso', 'Currency_code': 'XOF'},
  {'id': 59, 'country_name': 'Burundi', 'Currency_code': 'BIF'},
  {'id': 60, 'country_name': 'Cabo Verde', 'Currency_code': 'CVE'},
  {'id': 61, 'country_name': 'Cameroon', 'Currency_code': 'XAF'},
  {'id': 62, 'country_name': 'Central African Republic', 'Currency_code': 'XAF'},
  {'id': 63, 'country_name': 'Chad', 'Currency_code': 'XAF'},
  {'id': 64, 'country_name': 'China', 'Currency_code': 'CNY'},
  {'id': 65, 'country_name': 'Colombia', 'Currency_code': 'COP'},
  {'id': 66, 'country_name': 'Comoros', 'Currency_code': 'KMF'},
  {'id': 67, 'country_name': 'Costa Rica', 'Currency_code': 'CRC'},
  {'id': 68, 'country_name': 'Croatia', 'Currency_code': 'EUR'},
  {'id': 69, 'country_name': 'Cuba', 'Currency_code': 'CUP'},
  {'id': 70, 'country_name': 'Cyprus', 'Currency_code': 'EUR'},
  {'id': 71, 'country_name': 'Czech Republic', 'Currency_code': 'CZK'},
  {'id': 72, 'country_name': 'Democratic Republic of the Congo', 'Currency_code': 'CDF'},
  {'id': 73, 'country_name': 'Denmark', 'Currency_code': 'DKK'},
  {'id': 74, 'country_name': 'Djibouti', 'Currency_code': 'DJF'},
  {'id': 75, 'country_name': 'Dominica', 'Currency_code': 'XCD'},
  {'id': 76, 'country_name': 'Dominican Republic', 'Currency_code': 'DOP'},
  {'id': 77, 'country_name': 'Ecuador', 'Currency_code': 'USD'},
  {'id': 78, 'country_name': 'El Salvador', 'Currency_code': 'USD'},
  {'id': 79, 'country_name': 'Equatorial Guinea', 'Currency_code': 'XAF'},
  {'id': 80, 'country_name': 'Eritrea', 'Currency_code': 'ERN'},
  {'id': 81, 'country_name': 'Estonia', 'Currency_code': 'EUR'},
  {'id': 82, 'country_name': 'Eswatini', 'Currency_code': 'SZL'},
  {'id': 83, 'country_name': 'Ethiopia', 'Currency_code': 'ETB'},
  {'id': 84, 'country_name': 'Fiji', 'Currency_code': 'FJD'},
  {'id': 85, 'country_name': 'Finland', 'Currency_code': 'EUR'},
  {'id': 86, 'country_name': 'France', 'Currency_code': 'EUR'},
  {'id': 87, 'country_name': 'Gabon', 'Currency_code': 'XAF'},
  {'id': 88, 'country_name': 'Gambia', 'Currency_code': 'GMD'},
  {'id': 89, 'country_name': 'Georgia', 'Currency_code': 'GEL'},
  {'id': 90, 'country_name': 'Germany', 'Currency_code': 'EUR'},
  {'id': 91, 'country_name': 'Ghana', 'Currency_code': 'GHS'},
  {'id': 92, 'country_name': 'Greece', 'Currency_code': 'EUR'},
  {'id': 93, 'country_name': 'Grenada', 'Currency_code': 'XCD'},
  {'id': 94, 'country_name': 'Guatemala', 'Currency_code': 'GTQ'},
  {'id': 95, 'country_name': 'Guinea', 'Currency_code': 'GNF'},
  {'id': 96, 'country_name': 'Guinea-Bissau', 'Currency_code': 'XOF'},
  {'id': 97, 'country_name': 'Guyana', 'Currency_code': 'GYD'},
  {'id': 98, 'country_name': 'Haiti', 'Currency_code': 'HTG'},
  {'id': 99, 'country_name': 'Honduras', 'Currency_code': 'HNL'},
  {'id': 100, 'country_name': 'Hong Kong', 'Currency_code': 'HKD'},
  {'id': 101, 'country_name': 'Hungary', 'Currency_code': 'HUF'},
  {'id': 102, 'country_name': 'Iran', 'Currency_code': 'IRR'},
  {'id': 103, 'country_name': 'Iraq', 'Currency_code': 'IQD'},
  {'id': 104, 'country_name': 'Ireland', 'Currency_code': 'EUR'},
  {'id': 105, 'country_name': 'Italy', 'Currency_code': 'EUR'},
  {'id': 106, 'country_name': 'Jamaica', 'Currency_code': 'JMD'},
  {'id': 107, 'country_name': 'Jordan', 'Currency_code': 'JOD'},
  {'id': 108, 'country_name': 'Kazakhstan', 'Currency_code': 'KZT'},
  {'id': 109, 'country_name': 'Kenya', 'Currency_code': 'KES'},
  {'id': 110, 'country_name': 'Kiribati', 'Currency_code': 'AUD'},
  {'id': 111, 'country_name': 'Kuwait', 'Currency_code': 'KWD'},
  {'id': 112, 'country_name': 'Kyrgyzstan', 'Currency_code': 'KGS'},
  {'id': 113, 'country_name': 'Laos', 'Currency_code': 'LAK'},
  {'id': 114, 'country_name': 'Latvia', 'Currency_code': 'EUR'},
  {'id': 115, 'country_name': 'Lesotho', 'Currency_code': 'LSL'},
  {'id': 116, 'country_name': 'Liberia', 'Currency_code': 'LRD'},
  {'id': 117, 'country_name': 'Libya', 'Currency_code': 'LYD'},
  {'id': 118, 'country_name': 'Liechtenstein', 'Currency_code': 'CHF'},
  {'id': 119, 'country_name': 'Lithuania', 'Currency_code': 'EUR'},
  {'id': 120, 'country_name': 'Luxembourg', 'Currency_code': 'EUR'},
  {'id': 121, 'country_name': 'Madagascar', 'Currency_code': 'MGA'},
  {'id': 122, 'country_name': 'Malawi', 'Currency_code': 'MWK'},
  {'id': 123, 'country_name': 'Maldives', 'Currency_code': 'MVR'},
  {'id': 124, 'country_name': 'Mali', 'Currency_code': 'XOF'},
  {'id': 125, 'country_name': 'Malta', 'Currency_code': 'EUR'},
  {'id': 126, 'country_name': 'Marshall Islands', 'Currency_code': 'USD'},
  {'id': 127, 'country_name': 'Mauritania', 'Currency_code': 'MRU'},
  {'id': 128, 'country_name': 'Mauritius', 'Currency_code': 'MUR'},
  {'id': 129, 'country_name': 'Mexico', 'Currency_code': 'MXN'},
  {'id': 130, 'country_name': 'Micronesia', 'Currency_code': 'USD'},
  {'id': 131, 'country_name': 'Moldova', 'Currency_code': 'MDL'},
  {'id': 132, 'country_name': 'Monaco', 'Currency_code': 'EUR'},
  {'id': 133, 'country_name': 'Mongolia', 'Currency_code': 'MNT'},
  {'id': 134, 'country_name': 'Montenegro', 'Currency_code': 'EUR'},
  {'id': 135, 'country_name': 'Morocco', 'Currency_code': 'MAD'},
  {'id': 136, 'country_name': 'Mozambique', 'Currency_code': 'MZN'},
  {'id': 137, 'country_name': 'Myanmar', 'Currency_code': 'MMK'},
  {'id': 138, 'country_name': 'Namibia', 'Currency_code': 'NAD'},
  {'id': 139, 'country_name': 'Nauru', 'Currency_code': 'AUD'},
  {'id': 140, 'country_name': 'Nepal', 'Currency_code': 'NPR'},
  {'id': 141, 'country_name': 'Netherlands', 'Currency_code': 'EUR'},
  {'id': 142, 'country_name': 'New Zealand', 'Currency_code': 'NZD'},
  {'id': 143, 'country_name': 'Nicaragua', 'Currency_code': 'NIO'},
  {'id': 144, 'country_name': 'Niger', 'Currency_code': 'XOF'},
  {'id': 145, 'country_name': 'Nigeria', 'Currency_code': 'NGN'},
  {'id': 146, 'country_name': 'North Macedonia', 'Currency_code': 'MKD'},
  {'id': 147, 'country_name': 'Norway', 'Currency_code': 'NOK'},
  {'id': 148, 'country_name': 'Palau', 'Currency_code': 'USD'},
  {'id': 149, 'country_name': 'Panama', 'Currency_code': 'PAB'},
  {'id': 150, 'country_name': 'Papua New Guinea', 'Currency_code': 'PGK'},
  {'id': 151, 'country_name': 'Paraguay', 'Currency_code': 'PYG'},
  {'id': 152, 'country_name': 'Peru', 'Currency_code': 'PEN'},
  {'id': 153, 'country_name': 'Philippines', 'Currency_code': 'PHP'},
  {'id': 154, 'country_name': 'Poland', 'Currency_code': 'PLN'},
  {'id': 155, 'country_name': 'Portugal', 'Currency_code': 'EUR'},
  {'id': 156, 'country_name': 'Republic of the Congo', 'Currency_code': 'XAF'},
  {'id': 157, 'country_name': 'Romania', 'Currency_code': 'RON'},
  {'id': 158, 'country_name': 'Rwanda', 'Currency_code': 'RWF'},
  {'id': 159, 'country_name': 'Saint Kitts and Nevis', 'Currency_code': 'XCD'},
  {'id': 160, 'country_name': 'Saint Lucia', 'Currency_code': 'XCD'},
  {'id': 161, 'country_name': 'Saint Vincent and the Grenadines', 'Currency_code': 'XCD'},
  {'id': 162, 'country_name': 'Samoa', 'Currency_code': 'WST'},
  {'id': 163, 'country_name': 'San Marino', 'Currency_code': 'EUR'},
  {'id': 164, 'country_name': 'Sao Tome and Principe', 'Currency_code': 'STN'},
  {'id': 165, 'country_name': 'Senegal', 'Currency_code': 'XOF'},
  {'id': 166, 'country_name': 'Serbia', 'Currency_code': 'RSD'},
  {'id': 167, 'country_name': 'Seychelles', 'Currency_code': 'SCR'},
  {'id': 168, 'country_name': 'Sierra Leone', 'Currency_code': 'SLE'},
  {'id': 169, 'country_name': 'Singapore', 'Currency_code': 'SGD'},
  {'id': 170, 'country_name': 'Slovakia', 'Currency_code': 'EUR'},
  {'id': 171, 'country_name': 'Slovenia', 'Currency_code': 'EUR'},
  {'id': 172, 'country_name': 'Solomon Islands', 'Currency_code': 'SBD'},
  {'id': 173, 'country_name': 'Somalia', 'Currency_code': 'SOS'},
  {'id': 174, 'country_name': 'South Africa', 'Currency_code': 'ZAR'},
  {'id': 175, 'country_name': 'South Sudan', 'Currency_code': 'SSP'},
  {'id': 176, 'country_name': 'Spain', 'Currency_code': 'EUR'},
  {'id': 177, 'country_name': 'Sri Lanka', 'Currency_code': 'LKR'},
  {'id': 178, 'country_name': 'Sudan', 'Currency_code': 'SDG'},
  {'id': 179, 'country_name': 'Tajikistan', 'Currency_code': 'TJS'},
  {'id': 180, 'country_name': 'Tanzania', 'Currency_code': 'TZS'},
  {'id': 181, 'country_name': 'Thailand', 'Currency_code': 'THB'},
  {'id': 182, 'country_name': 'Timor-Leste', 'Currency_code': 'USD'},
  {'id': 183, 'country_name': 'Togo', 'Currency_code': 'XOF'},
  {'id': 184, 'country_name': 'Tonga', 'Currency_code': 'TOP'},
  {'id': 185, 'country_name': 'Trinidad and Tobago', 'Currency_code': 'TTD'},
  {'id': 186, 'country_name': 'Tunisia', 'Currency_code': 'TND'},
  {'id': 187, 'country_name': 'Turkmenistan', 'Currency_code': 'TMT'},
  {'id': 188, 'country_name': 'Tuvalu', 'Currency_code': 'AUD'},
  {'id': 189, 'country_name': 'Uganda', 'Currency_code': 'UGX'},
  {'id': 190, 'country_name': 'Ukraine', 'Currency_code': 'UAH'},
  {'id': 191, 'country_name': 'United Arab Emirates', 'Currency_code': 'AED'},
  {'id': 192, 'country_name': 'United Kingdom', 'Currency_code': 'GBP'},
  {'id': 193, 'country_name': 'Vanuatu', 'Currency_code': 'VUV'},
  {'id': 194, 'country_name': 'Venezuela', 'Currency_code': 'VES'},
  {'id': 195, 'country_name': 'Vietnam', 'Currency_code': 'VND'},
  {'id': 196, 'country_name': 'Zambia', 'Currency_code': 'ZMW'}
];
  const [from,setfrom]=useState()
    const [to,setto]=useState()
    const [result,setresult]=useState('')
    const[amount,setamount]=useState()


    
      const convert=()=>{
        const myHeaders = new Headers();
          myHeaders.append("apikey", "Qavfv9VlfKEFAIyHmnhdSq9VHgVj16MR");

            const requestOptions = {
                method: 'GET',
                redirect: 'follow',
                headers: myHeaders
            };
        fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,requestOptions)
            .then((res) => res.json())
            .then((data) => {
                setresult(data);
                console.log(data);
               
            })
        }
   return (
    <>
       
              <div className="container ">
                 <div className="row ">
                    <div className="col ">
                        <div className="card mt-5 border-0">
                           
                            <div className="card-body">
                            <h4 >خدمة تحويل العملات</h4>
                                <div className="row">
                                    <div className="col">
                                        
                                      <select className="form-select" onChange={(e)=>setfrom(e.target.value)} >
                                        {
                                            currancy.map((e)=>(

                                              <option value={e.Currency_code}><span className="text-dark">{e.country_name}</span></option>

                                            ))
                                        }
                                        
                                      </select>
                                    </div>
                                    <div className="col">
                                        <select className="form-select" onChange={(e)=>setto(e.target.value)} >
                                        {
                                            currancy.map((e)=>(

                                              <option value={e.Currency_code}><span className="text-dark">{e.country_name}</span></option>

                                            ))
                                        }
                                        </select>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col">
                                        <label className="form-label">المبلغ</label>
                                        <input type="text"  className="form-control" onChange={(e)=>setamount(e.target.value)}></input>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col text-center">
                                        <button className="btn btn-secondary" onClick={convert}>تحويل</button>
                                    </div>
                                </div>


                                <div className="row mt-4">
                                <div className="col-sm-5 ">
                                      
                                    </div>
                                    <div className="  col-4 ">
                                    <h5  className="text-white text-center p-3 rounded"  style={{ backgroundColor: '#670b43', border: '5px solid #dee2e6' }}> {result.result} </h5>
                                   </div>
                                </div>
                             
                            </div>
                        </div>
                    </div>
                 </div>
              </div>
      
        
    
    </>
    
);

}
 
export default ConvertCurrancy;