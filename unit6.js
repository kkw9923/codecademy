var friends = new Object();

//friends.name = 'Jim';

var friends = {
    bill: {
        firstName: 'Bill',
        lastName: 'Watson',
        number: '111-1111',
        address: ['some rd', 'some city']
    },
    
    steve: {
        firstName: 'Steve',
        lastName: 'Evans',
        number: '222-2222',
        address: ['some rd', 'some city']
    }
};

var list = function(par){
    for(var name in par){
        console.log(name);
    }
};

var search = function(name){
    for(var match in friends){
        if(friends[match].firstName === name){
            console.log(friends[match]);
            return friends[match];
        }
    }
};