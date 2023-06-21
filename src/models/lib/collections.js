class Collection{
    constructor(model){
        this.model=model
    }
    async read(id,model){
        let record=null;
        try {
            if(id){
                record=await this.model.findOne({where:{id:id}});
            }else{
                record =await this.model.findAll();
            }
            return record;
        } catch (err) {
            return err;
        }
       
        
    }
    async create(body){
        try{
            const created=this.model.create(body);
            return created;
        }
        catch(err){
            return err;
        }
        
    }
    async update(id,body){
        try{
            const updated=this.model.update(body,{where:{id:id}})
            return updated;
        }
        catch(err){
            return err;
        }
        
    }
    async delete(id){
        try{
            const deleted=this.model.destroy({where:{id:id}});
            return deleted;
        }
        catch(err){
            return err;
        }
        
    }
   async ownerCars(id,model){
    
          const records=await this.model.findOne(
            {where:{id:id},
            include:model
            });
            return records;
        }
}
module.exports=Collection;