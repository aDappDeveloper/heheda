class File {
	//user address
	address:string
	//id on server
	id : BigInt
	//hash of the file on ipfs
	ipfsSign:string
	constructor(){
		this.id = BigInt(0)
		this.address = String
		this.ipfsSign = String
	}		
}
//store like times everday
class DailyLike {
	//user address
	address:string
	//like times daily
	likeTime:Mapping<number>
	constructor(){
		this.address = String
		this.likeTime = new Mapping(number)()
	}

}
//brand contract class
export class BrandTokenContract extends AschContract{
	//record the relation for id & file
	idForFile:Mapping<File>
	idForAddress:Mapping<String>
	//all token num for brand
	totalToken:BigInt
	usedToken:BigInt
	// user token info
	userHolding:Mapping<bigint>
	// bonus for upload
	bonusUploadNum = 5
	costLikeNum = 2	
	//map address with DailyLike
	addForDailyLike : Mapping<DailyLike>
	constructor(){
		super()
		this.idForFile = new Mapping<File>()
		this.idForAddress = new Mapping<String>()
		this.totalToken = BigInt(1000000000)
		this.usedToken = BigInt(0)
		this.userHolding = new Mapping<bigint>()
		this.addForDailyLike = new Mapping<DailyLike>()
	}
	UploadFile(id:BigInt,ipfs:string): void {
		const add = this.context.senderAddress
		this.idForFile[id] = new File()
		this.idForFile[id].id = id
		this.idForFile[id].ipfsSign = ipfs
		sendTokenToUploader(add,this.bonusUploadNum)
	}
	LikeFile(id:BigInt):void{ 

		const add = this.context.senderAddress
		minusTokenToLike(add,this.costLikeNum)
		
	}
	DislikeFile(id:bigint):void{
	   
	}
			
	SignRoll(id:number,value:number | bigint):void{ 
		
	}	
	//id game round num, num: bonus  num
	DoRoll(id:number,num:number):Array{ 

	}
		
	private sendTokenToUploader(address:string,value:bigint | number):void{
		const holdNum =  this.userHolding[address]
		if(!const){ 
			this.userHolding[address] = 0
		}
		assert((this.totalToken - this.usedToekn) >0,'not enough token')
		this.usedToken += value
		this.userHolding[address] += value
	}
	private minusTokenToLike(add:string,value:bigint|number):void{
		const holdNum = this.userHolding[address]
		if(!const){
			this.userHolding[address] = 0;
		}
		assert(this.userHolding[address] < value,'not enough token')
		this.usedToken -= value;
		this.userHolding[address] -= value;
	}


}

