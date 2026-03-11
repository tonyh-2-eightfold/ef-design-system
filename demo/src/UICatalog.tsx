import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/components/ui/context-menu'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import {
  Input,
  InsightCard,
  CourseObjectCard,
  ProjectObjectCard,
  PeopleObjectCard,
  MentorInsightCard,
} from '@tonyh-2-eightfold/ef-design-system'
import { Label } from '@/components/ui/label'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Progress } from '@/components/ui/progress'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import { Sheet, SheetBody, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Skeleton } from '@/components/ui/skeleton'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Inbox, FileText, Bell } from 'lucide-react'
import { Textarea } from '@/components/ui/textarea'
import { Toggle } from '@/components/ui/toggle'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty'
import { Kbd } from '@/components/ui/kbd'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
function MaterialIcon({ name, className }: { name: string; className?: string }) {
  return <span className={`material-symbols-outlined ${className ?? ''}`} style={{ fontSize: '1em' }}>{name}</span>
}

function slug(title: string) {
  return title.toLowerCase().replace(/\s+/g, '-')
}

function Block({
  title,
  id: idProp,
  children,
  plain,
}: {
  title: string
  id?: string
  children: React.ReactNode
  /** No bordered/muted wrapper; for design-system components that should match Figma (e.g. object cards) */
  plain?: boolean
}) {
  const id = idProp ?? slug(title)
  return (
    <section id={id} className="scroll-mt-24 space-y-3">
      <h3 className="text-sm font-medium text-foreground">{title}</h3>
      <div
        className={cn(
          plain
            ? 'flex flex-wrap items-start gap-6 bg-background p-6'
            : 'flex min-h-[80px] flex-wrap items-center gap-4 rounded-lg border border-border bg-muted/30 p-4'
        )}
      >
        {children}
      </div>
    </section>
  )
}

export function UICatalog({
  scrollToId,
  onScrolled,
}: {
  scrollToId?: string | null
  onScrolled?: () => void
}) {
  const [open, setOpen] = useState(false)
  const [sheetOpen, setSheetOpen] = useState(false)
  const [sliderVal, setSliderVal] = useState([50])

  useEffect(() => {
    if (!scrollToId) return
    const el = document.getElementById(scrollToId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      onScrolled?.()
    }
  }, [scrollToId, onScrolled])

  return (
    <div className="space-y-10">
      <p className="text-sm text-muted-foreground">
        All shadcn/ui components in one place. Use the sidebar to jump to a component.
      </p>

      <div className="space-y-8">
        <Block title="Accordion">
          <Accordion type="single" collapsible className="w-full max-w-md">
            <AccordionItem value="1">
              <AccordionTrigger>Item 1</AccordionTrigger>
              <AccordionContent>Content for item 1.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="2">
              <AccordionTrigger>Item 2</AccordionTrigger>
              <AccordionContent>Content for item 2.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </Block>

        <Block title="Alert">
          <Alert>
            <AlertTitle>Title</AlertTitle>
            <AlertDescription>Description text for the alert.</AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertTitle>Destructive</AlertTitle>
            <AlertDescription>Destructive variant.</AlertDescription>
          </Alert>
        </Block>

        <Block title="Alert Dialog">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline">Open</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Confirm</AlertDialogTitle>
                <AlertDialogDescription>Are you sure?</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel asChild>
                  <Button variant="secondary">Cancel</Button>
                </AlertDialogCancel>
                <AlertDialogAction asChild>
                  <Button>Continue</Button>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </Block>

        <Block title="Aspect Ratio">
          <AspectRatio ratio={16 / 9} className="w-48 overflow-hidden rounded-md bg-muted">
            <div className="flex h-full items-center justify-center text-muted-foreground text-xs">
              16:9
            </div>
          </AspectRatio>
        </Block>

        <Block title="Avatar">
          <div className="grid gap-10 sm:grid-cols-2">
            {/* Single avatars */}
            <div className="flex flex-col gap-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Single</h4>
              <div className="flex flex-col gap-5">
                <div>
                  <p className="mb-2 text-[11px] font-medium text-muted-foreground">Sizes</p>
                  <div className="flex flex-wrap items-end gap-3 grayscale">
                    {[
                      { size: 'sm' as const, label: 'sm' },
                      { size: 'default' as const, label: 'default' },
                      { size: 'lg' as const, label: 'lg' },
                      { size: 'xl' as const, label: 'xl' },
                      { size: '2xl' as const, label: '2xl' },
                    ].map(({ size, label }) => (
                      <div key={label} className="flex flex-col items-center gap-1">
                        <Avatar size={size}>
                          <AvatarImage src="https://github.com/shadcn.png" alt="" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <span className="text-[10px] text-muted-foreground">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-[11px] font-medium text-muted-foreground">With image</p>
                  <div className="flex flex-wrap items-center gap-4 grayscale">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" alt="" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarImage src="https://github.com/evilrabbit.png" alt="" />
                      <AvatarFallback>ER</AvatarFallback>
                      <AvatarBadge className="bg-green-600 dark:bg-green-800" />
                    </Avatar>
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-[11px] font-medium text-muted-foreground">Fallback only</p>
                  <div className="flex flex-wrap items-end gap-3">
                    {[
                      { size: 'sm' as const, label: 'sm', fallback: 'S', className: 'bg-blue-500 text-white' },
                      { size: 'default' as const, label: 'default', fallback: 'AB', className: 'bg-emerald-500 text-white' },
                      { size: 'lg' as const, label: 'lg', fallback: 'XY', className: 'bg-violet-500 text-white' },
                      { size: 'xl' as const, label: 'xl', fallback: 'XL', className: 'bg-amber-500 text-white' },
                      { size: '2xl' as const, label: '2xl', fallback: '2X', className: 'bg-rose-500 text-white' },
                    ].map(({ size, label, fallback, className }) => (
                      <div key={label} className="flex flex-col items-center gap-1">
                        <Avatar size={size}>
                          <AvatarFallback className={className}>{fallback}</AvatarFallback>
                        </Avatar>
                        <span className="text-[10px] text-muted-foreground">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Groups */}
            <div className="flex flex-col gap-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Groups</h4>
              <div className="flex flex-col gap-5">
                <div>
                  <p className="mb-2 text-[11px] font-medium text-muted-foreground">Default</p>
                  <AvatarGroup className="grayscale">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" alt="" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarImage src="https://github.com/maxleiter.png" alt="" />
                      <AvatarFallback>LR</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarImage src="https://github.com/evilrabbit.png" alt="" />
                      <AvatarFallback>ER</AvatarFallback>
                    </Avatar>
                    <AvatarGroupCount>+3</AvatarGroupCount>
                  </AvatarGroup>
                </div>
                <div>
                  <p className="mb-2 text-[11px] font-medium text-muted-foreground">Small</p>
                  <AvatarGroup size="sm" className="grayscale">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" alt="" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarImage src="https://github.com/maxleiter.png" alt="" />
                      <AvatarFallback>LR</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarImage src="https://github.com/evilrabbit.png" alt="" />
                      <AvatarFallback>ER</AvatarFallback>
                    </Avatar>
                    <AvatarGroupCount>+3</AvatarGroupCount>
                  </AvatarGroup>
                </div>
              </div>
            </div>
          </div>
        </Block>

        <Block title="Badge">
          <div className="space-y-4">
            <div>
              <p className="mb-2 text-xs font-medium text-muted-foreground">Variants (size 24h)</p>
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </div>
            <div>
              <p className="mb-2 text-xs font-medium text-muted-foreground">Sizes (44h, 30h, 24h, no container)</p>
              <div className="flex flex-wrap items-end gap-3">
                <Badge size="44">44</Badge>
                <Badge size="30">30</Badge>
                <Badge size="24">24</Badge>
                <Badge size="none">No container</Badge>
              </div>
            </div>
          </div>
        </Block>

        <Block title="Breadcrumb">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Lib</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Current</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Block>

        <Block title="Button">
          <p className="w-full text-xs text-muted-foreground">Canonical (library). Octuple DS, tokens only.</p>
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="default">Primary</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="orange">Orange</Button>
          </div>
          <p className="mt-4 w-full text-xs font-medium text-muted-foreground">With leading / trailing icons (Material Symbols)</p>
          <div className="flex flex-wrap items-center gap-2">
            <Button variant="outline" leadingIcon={<MaterialIcon name="arrow_back" />}>Back</Button>
            <Button variant="outline" trailingIcon={<MaterialIcon name="arrow_forward" />}>Next</Button>
            <Button variant="secondary" leadingIcon={<MaterialIcon name="add" />}>Add item</Button>
          </div>
          <p className="mt-4 w-full text-xs font-medium text-muted-foreground">Sizes (text)</p>
          <div className="flex flex-wrap items-end gap-4">
            <div className="flex flex-col items-center gap-1">
              <Button size="xs">xs</Button>
              <span className="text-[10px] text-muted-foreground">size=&quot;xs&quot;</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Button size="sm">sm</Button>
              <span className="text-[10px] text-muted-foreground">size=&quot;sm&quot;</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Button size="default">default</Button>
              <span className="text-[10px] text-muted-foreground">size=&quot;default&quot;</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Button size="lg">lg</Button>
              <span className="text-[10px] text-muted-foreground">size=&quot;lg&quot;</span>
            </div>
          </div>
          <p className="mt-4 w-full text-xs font-medium text-muted-foreground">Sizes (icon)</p>
          <div className="flex flex-wrap items-end gap-4">
            <div className="flex flex-col items-center gap-1">
              <Button size="icon-xs" aria-label="icon-xs"><MaterialIcon name="more_vert" /></Button>
              <span className="text-[10px] text-muted-foreground">icon-xs</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Button size="icon-sm" aria-label="icon-sm"><MaterialIcon name="more_vert" /></Button>
              <span className="text-[10px] text-muted-foreground">icon-sm</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Button size="icon" aria-label="icon"><MaterialIcon name="more_vert" /></Button>
              <span className="text-[10px] text-muted-foreground">icon</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Button size="icon-lg" aria-label="icon-lg"><MaterialIcon name="more_vert" /></Button>
              <span className="text-[10px] text-muted-foreground">icon-lg</span>
            </div>
          </div>
        </Block>

        <Block title="Calendar">
          <Calendar mode="single" className="rounded-md border" />
        </Block>

        <Block title="Card">
          <Card className="w-[280px]">
            <CardHeader>
              <CardTitle>Card title</CardTitle>
              <CardDescription>Card description.</CardDescription>
            </CardHeader>
            <CardContent>Content here.</CardContent>
            <CardFooter>
              <Button size="sm">Action</Button>
            </CardFooter>
          </Card>
        </Block>

        <Block title="Object Cards" id="object-cards" plain>
          <p className="w-full text-sm text-muted-foreground">
            CourseObjectCard, ProjectObjectCard, PeopleObjectCard — Octuple DS Theme 2 (Figma). Object cards for course, project, and people.
          </p>
          <div className="flex flex-wrap items-start gap-6">
            <CourseObjectCard
              course={{
                title: 'Introduction to React',
                provider: 'Acme Learning',
                duration: '4h',
                skills: ['React', 'JavaScript'],
                completedBy: [
                  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop&crop=face',
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=96&h=96&fit=crop&crop=face',
                ],
              }}
              href="#"
              renderFacepile={({ avatarUrls }: { avatarUrls: string[] }) => {
                const display = avatarUrls.slice(0, 3)
                const extra = avatarUrls.length - display.length
                return (
                  <AvatarGroup size="sm">
                    {display.map((src: string, i: number) => (
                      <Avatar key={i}>
                        <AvatarImage src={src} alt="" />
                        <AvatarFallback>{String(i + 1)}</AvatarFallback>
                      </Avatar>
                    ))}
                    {extra > 0 && <AvatarGroupCount>+{extra}</AvatarGroupCount>}
                  </AvatarGroup>
                )
              }}
            />
            <ProjectObjectCard
              project={{
                title: 'Platform migration',
                owner: 'Engineering',
                status: '3 hrs/week',
                skills: ['React', 'Node'],
                projectManager: {
                  name: 'Jordan Lee',
                  avatarSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=face',
                },
              }}
              href="#"
              showBottomBar={false}
            />
            <PeopleObjectCard
              person={{
                name: 'Jordan Lee',
                title: 'Senior Engineer',
                email: 'jordan.lee@example.com',
                avatarSrc: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
                openTo: 'mentoring',
              }}
              href="#"
              renderAvatar={({ src, alt, fallback }: { src: string; alt: string; fallback: string }) => (
                <Avatar size="2xl" className="people-object-card__avatar">
                  <AvatarImage src={src} alt={alt} />
                  <AvatarFallback>{fallback}</AvatarFallback>
                </Avatar>
              )}
            />
          </div>
        </Block>

        <Block title="Insight Cards" id="insight-cards" plain>
          <p className="w-full text-sm text-muted-foreground">
            InsightCard, MentorInsightCard — Learning path and mentor insight cards (Octuple DS Theme 2).
          </p>
          <div className="flex flex-wrap items-start gap-6">
            <InsightCard
              title="Learning path"
              badge="New"
              description="Build skills with curated courses."
              recommendedLabel="Recommended for you"
              icon="school"
              bgColor="#E8F4FD"
              iconBgColor="#B3D9FC"
              iconColor="#0B5B8A"
              buttonLabel="View path"
              buttonHref="#"
            >
              <span style={{ font: 'var(--typography-body3)', color: '#4F5666' }}>Slot content</span>
            </InsightCard>
            <MentorInsightCard
              mentor={{
                name: 'Sam Chen',
                role: 'Staff Engineer',
                avatarSrc: 'https://i.pravatar.cc/128?u=sam-chen',
                matchText: 'Skills match',
                matchCount: 3,
              }}
            />
          </div>
        </Block>

        <Block title="Checkbox">
          <div className="flex items-center gap-2">
            <Checkbox id="c1" />
            <Label htmlFor="c1">Accept terms</Label>
          </div>
        </Block>

        <Block title="Collapsible">
          <Collapsible>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm" trailingIcon={<MaterialIcon name="expand_more" />}>
                Toggle
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="pt-2 text-sm text-muted-foreground">
              Collapsible content.
            </CollapsibleContent>
          </Collapsible>
        </Block>

        <Block title="Context Menu">
          <ContextMenu>
            <ContextMenuTrigger className="rounded-md border border-dashed p-4 text-sm">
              Right-click here
            </ContextMenuTrigger>
            <ContextMenuContent>
              <ContextMenuItem>Copy</ContextMenuItem>
              <ContextMenuItem>Paste</ContextMenuItem>
            </ContextMenuContent>
          </ContextMenu>
        </Block>

        <Block title="Dialog">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="outline">Open dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Dialog title</DialogTitle>
                <DialogDescription>Dialog description.</DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline" onClick={() => setOpen(false)}>
                  Close
                </Button>
                <Button onClick={() => setOpen(false)}>Save</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </Block>

        <Block title="Dropdown Menu">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Open menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Log out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Block>

        <Block title="Navigation Menu">
          <p className="w-full text-xs text-muted-foreground mb-2">Underline (line indicator)</p>
          <NavigationMenu variant="underline">
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuLink href="#" active>Home</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[320px] gap-1 p-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="#" className="block rounded-md px-3 py-2 text-sm text-foreground hover:bg-muted hover:text-foreground">
                          Components
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="#" className="block rounded-md px-3 py-2 text-sm text-foreground hover:bg-muted hover:text-foreground">
                          Templates
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="#" className="block rounded-md px-3 py-2 text-sm text-foreground hover:bg-muted hover:text-foreground">
                          Documentation
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="#" className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">
                          View all products →
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#">About</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <p className="w-full text-xs text-muted-foreground mb-2 mt-6">Pill (rounded background)</p>
          <NavigationMenu variant="pill">
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <NavigationMenuLink href="#" active>Home</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[320px] gap-1 p-2">
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="#" className="block rounded-md px-3 py-2 text-sm text-foreground hover:bg-muted hover:text-foreground">
                          Components
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="#" className="block rounded-md px-3 py-2 text-sm text-foreground hover:bg-muted hover:text-foreground">
                          Templates
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="#" className="block rounded-md px-3 py-2 text-sm text-foreground hover:bg-muted hover:text-foreground">
                          Documentation
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <a href="#" className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">
                          View all products →
                        </a>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#">About</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </Block>

        <Block title="Empty">
          <Empty className="border border-dashed py-8">
            <EmptyMedia />
            <EmptyHeader>
              <EmptyTitle>No items</EmptyTitle>
              <EmptyDescription>Add something to get started.</EmptyDescription>
            </EmptyHeader>
          </Empty>
        </Block>

        <Block title="Hover Card">
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="ghost">Hover me</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-64">Hover card content.</HoverCardContent>
          </HoverCard>
        </Block>

        <Block title="Input">
          <div className="flex flex-wrap items-end gap-4">
            <div className="flex flex-col gap-1.5">
              <Label className="text-xs text-muted-foreground">Small</Label>
              <Input size="small" placeholder="Placeholder" className="w-48" />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label className="text-xs text-muted-foreground">Medium</Label>
              <Input size="medium" placeholder="Placeholder" className="w-48" />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label className="text-xs text-muted-foreground">Large</Label>
              <Input size="large" placeholder="Placeholder" className="w-48" />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label className="text-xs text-muted-foreground">Disabled</Label>
              <Input size="medium" placeholder="Disabled" disabled className="w-48" />
            </div>
          </div>
        </Block>

        <Block title="Kbd">
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
          <Kbd>Enter</Kbd>
        </Block>

        <Block title="Pagination">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </Block>

        <Block title="Popover">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Open popover</Button>
            </PopoverTrigger>
            <PopoverContent className="w-64">Popover content.</PopoverContent>
          </Popover>
        </Block>

        <Block title="Progress">
          <Progress value={60} className="w-48" />
          <Progress value={100} className="w-48" />
        </Block>

        <Block title="Radio Group">
          <RadioGroup defaultValue="a" className="flex gap-4">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="a" id="r1" />
              <Label htmlFor="r1">Option A</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="b" id="r2" />
              <Label htmlFor="r2">Option B</Label>
            </div>
          </RadioGroup>
        </Block>

        <Block title="Resizable">
          <ResizablePanelGroup orientation="horizontal" className="max-w-md rounded-lg border">
            <ResizablePanel defaultSize={50}>Panel 1</ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50}>Panel 2</ResizablePanel>
          </ResizablePanelGroup>
        </Block>

        <Block title="Scroll Area">
          <ScrollArea className="h-24 w-48 rounded-md border p-3">
            <p className="text-sm">
              Scroll area content. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </ScrollArea>
        </Block>

        <Block title="Select">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Pick one" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="a">Option A</SelectItem>
              <SelectItem value="b">Option B</SelectItem>
              <SelectItem value="c">Option C</SelectItem>
            </SelectContent>
          </Select>
        </Block>

        <Block title="Separator">
          <div className="flex h-5 w-full items-center gap-2">
            <span className="text-sm">One</span>
            <Separator orientation="vertical" />
            <span className="text-sm">Two</span>
            <Separator orientation="vertical" />
            <span className="text-sm">Three</span>
          </div>
          <Separator className="w-48" />
        </Block>

        <Block title="Sheet">
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline">Open sheet</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Sheet title</SheetTitle>
              </SheetHeader>
              <SheetBody>
                <p className="text-sm text-muted-foreground">Sheet content.</p>
              </SheetBody>
            </SheetContent>
          </Sheet>
        </Block>

        <Block title="Skeleton">
          <Skeleton className="h-8 w-32" />
          <Skeleton className="h-20 w-48" />
          <Skeleton className="size-10 rounded-full" />
        </Block>

        <Block title="Slider">
          <Slider
            value={sliderVal}
            onValueChange={setSliderVal}
            max={100}
            step={1}
            className="w-48"
          />
          <span className="text-sm text-muted-foreground">{sliderVal[0]}</span>
        </Block>

        <Block title="Switch">
          <div className="flex items-center gap-2">
            <Switch id="s1" />
            <Label htmlFor="s1">Toggle</Label>
          </div>
          <Switch defaultChecked />
        </Block>

        <Block title="Table">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Value</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Alpha</TableCell>
                <TableCell>1</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Beta</TableCell>
                <TableCell>2</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Block>

        <Block title="Tabs">
          <div className="space-y-6">
            <div>
              <p className="mb-2 text-xs font-medium text-muted-foreground">Default</p>
              <Tabs defaultValue="1">
                <TabsList>
                  <TabsTrigger value="1">Tab 1</TabsTrigger>
                  <TabsTrigger value="2">Tab 2</TabsTrigger>
                </TabsList>
                <TabsContent value="1" className="pt-2 text-sm">Content 1</TabsContent>
                <TabsContent value="2" className="pt-2 text-sm">Content 2</TabsContent>
              </Tabs>
            </div>
            <div>
              <p className="mb-2 text-xs font-medium text-muted-foreground">With lines</p>
              <Tabs defaultValue="a">
                <TabsList variant="line">
                  <TabsTrigger value="a">Tab A</TabsTrigger>
                  <TabsTrigger value="b">Tab B</TabsTrigger>
                  <TabsTrigger value="c">Tab C</TabsTrigger>
                </TabsList>
                <TabsContent value="a" className="pt-2 text-sm">Content A</TabsContent>
                <TabsContent value="b" className="pt-2 text-sm">Content B</TabsContent>
                <TabsContent value="c" className="pt-2 text-sm">Content C</TabsContent>
              </Tabs>
            </div>
            <div>
              <p className="mb-2 text-xs font-medium text-muted-foreground">With leading icon and badge</p>
              <Tabs defaultValue="inbox">
                <TabsList variant="line">
                  <TabsTrigger value="inbox" leadingIcon={<Inbox />} badge={3}>Inbox</TabsTrigger>
                  <TabsTrigger value="docs" leadingIcon={<FileText />} badge={12}>Docs</TabsTrigger>
                  <TabsTrigger value="alerts" leadingIcon={<Bell />} badge={99}>Alerts</TabsTrigger>
                </TabsList>
                <TabsContent value="inbox" className="pt-2 text-sm">Inbox content</TabsContent>
                <TabsContent value="docs" className="pt-2 text-sm">Docs content</TabsContent>
                <TabsContent value="alerts" className="pt-2 text-sm">Alerts content</TabsContent>
              </Tabs>
            </div>
          </div>
        </Block>

        <Block title="Textarea">
          <Textarea placeholder="Placeholder" className="w-64 min-h-20" />
        </Block>

        <Block title="Toggle">
          <Toggle>Toggle</Toggle>
          <Toggle variant="outline">Outline</Toggle>
          <Toggle size="sm">Small</Toggle>
        </Block>

        <Block title="Toggle Group">
          <ToggleGroup type="single">
            <ToggleGroupItem value="a">A</ToggleGroupItem>
            <ToggleGroupItem value="b">B</ToggleGroupItem>
            <ToggleGroupItem value="c">C</ToggleGroupItem>
          </ToggleGroup>
        </Block>

        <Block title="Tooltip">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">Hover for tooltip</Button>
            </TooltipTrigger>
            <TooltipContent>Tooltip text</TooltipContent>
          </Tooltip>
        </Block>
      </div>
    </div>
  )
}
