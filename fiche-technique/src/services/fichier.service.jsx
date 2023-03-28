import http from "../http-common";


class FichierDataService{
    getAll() {
        return http.get("/Citadine");
      }
}

export default  FichierDataService();
