#include <stdio.h>
int id=0;   // id编号,下面写了它会依次增加
struct user{
    char name[20];
    int age;
    int sex;
}users[30];
void main(){
    int a;    //case 查找值
 while (1){
    printf("按1新增会员:\n");
    printf("按2删除会员:\n");   
    printf("按3修改会员:\n");
    printf("按4查找会员:\n");
    printf("按5退出会员:\n");
    scanf("%d",&a);   //此时输入一个a的值,找到对应的case,执行相应的函数
    switch(a){
        case 1:
            add();
            break;
        case 2:
            delete();
        break;
        case 3:
        revise();
            break;
        case 4:  
        check();
            break;
        case 5:
            exit(5);
            break;
}
        }
}
void add(){
       printf("请输入你要添加的会员姓名:\n");
            scanf("%s",users[id].name);
            printf("请输入你要添加的会员年龄:\n");
            scanf("%d",&users[id].age);
            printf("请输入你要添加的会员性别:\n");
            scanf("%d",&users[id].sex);
            printf("输入成功!\n");
            id++;        //执行完以上程序之后id加1
}
void check(){
    int i;         //定以一个整数变量i ,为接下来循环做准备
    char g[20];        //因为姓名,所以要用char 来定义一个变量,而且只有定义了才能呢个用scanf
    printf("请输入你要查找的姓名:\n");
    scanf("%s",g);
    for(i=0;i<id;i++){           //用i来循环出用户的id
          if(strcmp(g,users[i].name)==0){    //strcmp字符比较函数,如果所输入姓名和所找出的名字等于0,就输出
               printf("会员的姓名:%s\n会员的年龄:%d\n会员的性别:%d\n\n",users[i].name,users[i].age,users[i].sex);
    }
    }
}

void revise(){
    int i,j,o;      //变量i 用来循环出所要找的id,j为了从swtich中找出所做内容,o是为了战时存入i
        char g[20];
        printf("输入姓名修改会员的信息: ");
        scanf("%s",g);
        for(i = 0;i < id;i++)
        {
            if (strcmp(g,users[i].name) == 0)         //得到条件满足的用户信息
            {
                printf("姓名:%s\n",users[i].name);
                printf("年龄:%d\n",users[i].age);
                printf("性别:%d\n",users[i].sex);
                o = i;   //此时用o来村一下i的值,为下面修改做准备.此时存入的o就是两个姓名相等时的i
            }               //当条件满足时,i只有一个值,所以我们赶紧用一个变量来接收i,
        }                   //下面修改用户信息,就用这个固定的变量
    printf("1.修改姓名\n2.修改年龄\n3.修改性别");
    scanf("%d",&j);
    switch(j){
             case 1:printf("姓名修改为:\n");
                         scanf("%s",users[o].name);
                         break;
             case 2:printf("年龄修改为:\n");
                         scanf("%d",&users[o].age);
                         break;
             case 3:printf("性别修改为:\n");
                         scanf("%d",&users[o].sex);
                         break;
    }
}
void delete(){
    int i;
    char g[20];
    printf("输入你要删除的会员姓名:\n");
    scanf("%s",g);
    for(i=0;i<id;i++){
    if(strcmp(g,users[i].name)==0){
        users[i]=users[i+1];            //如果条件满足,我们就用后面所有的值覆盖前面的那个,users[i]表示所有的值
        id-=1;                                       //删除之后,我们的id要减减
    }
    }
}