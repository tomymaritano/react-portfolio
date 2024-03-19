import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

const ProjectsBreadcrumb = () => (
  <Breadcrumb fontSize={'14px'} color={'gray'}>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem isCurrentPage>
      <BreadcrumbLink href="#">Projects</BreadcrumbLink>
    </BreadcrumbItem>
  </Breadcrumb>
);

export default ProjectsBreadcrumb