import axios from "axios";

export default class TaskService {
  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/task`,
      withCredentials: true,
    });
  }
  create = (data) => this.instance.post("/", data);
  get = () => this.instance.get("/");
  getOne = (id) => this.instance.get(`/${id}`);
  deleteOne = (id) => this.instance.delete(`/${id}`);
  updateOne = (id, data) => this.instance.put(`/${id}`, data);
}
