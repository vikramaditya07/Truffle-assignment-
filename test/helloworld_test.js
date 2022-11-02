const Helloworld =artifacts.require("HelloWorld");
contract("Helloworld",accounts=>{
    it("contructor should senf message",async()=>{
        let instance=await Helloworld.deployed();
        let message=await instance.message();
        assert.equal(message,"Hello world constructor");
    })

    it("Owner should be first account",async()=>{
        let instance=await Helloworld.deployed();
        let owner=await instance.owner();
        assert.equal(owner,accounts[0]);
    })
})