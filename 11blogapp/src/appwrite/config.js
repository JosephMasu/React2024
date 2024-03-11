import conf from "../conf/conf.js"
import { Client, Databases, Storage, Query, ID } from "appwrite";

export class service{
    client = new Client()
    databases;
    bucket;


    constructor(){
        this.client.setEndpoint(conf.appwriteUrl)
        setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(conf.
                appwriteDatabaseId, conf.
                appwriteCollectionId, slug)
            
        } catch (error) {
            console.log("Appwrite service :: getPost", error);
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(conf.
                appwriteDatabaseId, conf.appwriteCollectionId, queries)
        } catch (error) {
            cnsole.log("Appwrite service :: getPosts", error);

        }
    }
    async createPost({title, slug, content, featuredImage, status, userID}){
        try {
            return await this.createPost.listDocuments(conf.
                appwriteDatabaseId, conf.appwriteCollectionId,
                slug,
                {
                    title, content, featuredImage, status, userID
                }
                )
                return false
            
        } catch (error) {
            cnsole.log("Appwrite service :: createPost", error);
            
        }
    }
    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId, 
                conf.appwriteCollectionId,
                slug,
                {
                    title, content, featuredImage, status
                }

            )
            
        } catch (error) {
            cnsole.log("Appwrite service :: upadatePost", error);
            return false
        }
    }

    async deletePost(slug){
        try {
           await this.databases.deleteDocument(
                conf.appwriteDatabaseId, 
                conf.appwriteCollectionId,
                slug,
            )
            return true
        } catch (error) {
            cnsole.log("Appwrite service :: deletePost", error);
            return false
        }

    }

    // Srorage service

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
            
        } catch (error) {
            cnsole.log("Appwrite service :: uploadFile", error);
            return false
        }
    }


    async deleteFile(fileID){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                fileID
            )
            
        } catch (error) {
            cnsole.log("Appwrite service :: uploadFile", error);
            return false
        }
    }

    getFilePreview(fileID){
        return this.bucket.getFilePreview(conf.appwriteBucketId,
            fileID).href
    }
}


const service = new Service()
export default service;






