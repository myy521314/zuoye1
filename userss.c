#include<stdio.h>
typedef struct {
    char name[100];
    int age;
    int sex;
    int tel;
} User;
int add(int  *q,User  *u){                //添加用户
                printf("请输入姓名:\n");
                scanf("%s",u->name);
                printf("请输入年龄:\n");
                scanf("%d",&u->age);
                printf("请输入性别:\n");
                scanf("%d",&u->sex);
                printf("请输入电话:\n");
                scanf("%d",&u->tel);
    return 0;
}
int see(User  *users){                    //查看用户信息
                printf("姓名:%s\n",users->name);
                printf("年龄:%d\n",users->age);
                printf("性别:%d\n",users->sex);
                printf("电话:%d\n",users->tel);
    }
int update(User  *users){             //修改用户信息
                 printf("请输入姓名:\n");
                scanf("%s",users->name);
                printf("请输入年龄:\n");
                scanf("%d",&users->age);
                printf("请输入性别:\n");
                scanf("%d",&users->sex);
                printf("请输入电话:\n");
                scanf("%d",&users->tel);
}
int delete(User  *u1,User  *u2)    //删除用户信息
{       
    *u1=*u2;
}
int main()
{
    User users[10];
    int count=0;
    int flag=1;                                                               //循环无限
    int i,q,f,z;                                                                //定义一些初始变量
    while(flag){
                printf("1.添加用户\n2.查看用户\n3.修改用户\n4.删除用户\n5.退出\n");         //输入数字进入选项
                scanf("%d",&i);
        switch(i){
            case 1:
                    add(&count,&users[count]);
                    count++;                                            //编号每次递加
            break;
            case 2:
                    printf("1.查看全部用户\n2.查看某个用户\n");
                    scanf("%d",&i);
            switch(i){
                    case 1:
                    for(int a=0;a<count;a++){
                        see(&users[a]);
                    };
                     break;
                    case 2:
                            printf("请输入查询的编号:\n");
                            scanf("%d",&q);
                    if(q>0){
                        see(&users[q-1]);
                    } else{
                            printf("请输入大于1的编号\n"); 
                    };
        };
            break;
            case 3:
                    printf("请输入所要修改的编号:\n");
                    scanf("%d",&f);
                    update(&users[f-1]);
            break;
            case 4:
                    printf("请输入要删除的编号:");
                    scanf("%d",&z);
            for(;z<count;z++){
					delete(&users[z],&users[z+1]);
				}
                    count--;                                                //编号递减
                printf("删除成功\n");
            break;
            case 5:
               flag=0;
            break;
        }
    }
}