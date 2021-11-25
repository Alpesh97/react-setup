import React from 'react'
class MyAccountsApp extends React.Component{

    constructor(props){
        super();
    }
    componentDidMount(){
        var token = localStorage.getItem("token");
        if(token!=null){
            console.log("Got :: "+token);
            // Simple POST request with a JSON body using fetch
            const requestOptions = {
                method: 'POST',
                headers: { 'Authorization': token },
            };
            fetch('http://java-app-cluster-loadbalancer-1509243656.ap-southeast-2.elb.amazonaws.com:8083/myaccountapp/redirect', requestOptions)
            .then(async response => {
                if (response.ok) {
                    alert(response);
                    window.location.href="https://myaccount-fbau.fujifilm.com/myaccount/";
                }
            }).catch(error => {
                 alert('There was an error!', error);
             });
        }
    }
    render(){
        return <div>
            <h1>Welcome to MyAccounts App</h1>
        </div>
    }

}
export default MyAccountsApp