--创建新闻数据表
USE NEWS GO;

--注意mysql要用反引号不是单引号括住字段名
CREATE TABLE `NEWS_INFO`(
	`new_id` INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY COMMENT '主键新闻id',
	`new_title` VARCHAR(100) NOT NULL COMMENT '新闻标题',
	`new_type` VARCHAR(100) NOT NULL COMMENT '新闻类型',
	`new_pic` TEXT NOT NULL COMMENT '新闻图片（转义过的）',
	`new_date` DATETIME DEFAULT NULL COMMENT '加入时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;